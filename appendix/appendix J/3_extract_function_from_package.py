#!/usr/bin/env python3
"""
resolve_polluted_functions.py

Walks prototype-pollution/<case>/*.test.test.cjs files (skipping
"_constructor.test.test.cjs" variants and any node_modules dirs), figures out
which npm package + function/constructor each test actually calls, resolves
that back to a real source file inside extracted/<package>/..., and copies
that file into called_functions/<package>/<same relative path>.

Pure stdlib, no dependencies. This is a heuristic regex-based static
analyzer (not a full JS AST parser) tuned to the common PoC shape:

    const varName = require("pkg[/subpath]");
    ...
    varName(...)                          // direct call
    varName.prop1.prop2(...)              // nested member call
    require("pkg").prop1(...)             // inline require + call

Usage:
    python3 resolve_polluted_functions.py \
        --pp-root prototype-pollution \
        --extracted extracted \
        --out called_functions [-v]

Actual:
    python .\3_extract_function_from_package.py --pp-root prototype-pollution --extracted 2_extracted --out 3_called_functions_CLAUDE
"""
import argparse
import csv
import json
import re
import shutil
import sys
from pathlib import Path

# Requires whose target obviously isn't an npm package we care about.
NODE_BUILTINS = {
    'assert', 'util', 'path', 'fs', 'os', 'crypto', 'events', 'stream',
    'http', 'https', 'url', 'querystring', 'child_process', 'buffer', 'net',
    'tls', 'zlib', 'readline', 'vm', 'cluster', 'dgram', 'dns', 'module',
    'process', 'timers', 'tty', 'constants', 'domain', 'punycode',
    'string_decoder', 'v8', 'worker_threads', 'perf_hooks',
}

REQUIRE_ASSIGN_RE = re.compile(
    r'(?:const|let|var)\s+(\{[^}]*\}|[A-Za-z_$][\w$]*)\s*=\s*require\(\s*[\'"]([^\'"]+)[\'"]\s*\)'
)

INLINE_REQUIRE_CALL_RE = re.compile(
    r'require\(\s*[\'"]([^\'"]+)[\'"]\s*\)((?:\s*\.\s*[A-Za-z_$][\w$]*)*)\s*\('
)

PROP_REQUIRE_RE_TEMPLATE = (
    r'(?:module\.exports|exports)\s*\.\s*{prop}\s*=\s*require\(\s*[\'"]([^\'"]+)[\'"]\s*\)'
)
PROP_IN_OBJECT_RE_TEMPLATE = r'\b{prop}\s*:\s*require\(\s*[\'"]([^\'"]+)[\'"]\s*\)'


# --------------------------------------------------------------------------
# Discovery of test files
# --------------------------------------------------------------------------

def find_test_files(pp_root: Path):
    results = []
    for dirpath, dirnames, filenames in __import__('os').walk(pp_root):
        dirnames[:] = [d for d in dirnames if d != 'node_modules']
        for fn in filenames:
            if fn.endswith('.test.test.cjs') and not fn.endswith('_constructor.test.test.cjs'):
                results.append(Path(dirpath) / fn)
    return results


# --------------------------------------------------------------------------
# Parsing the test file
# --------------------------------------------------------------------------

def parse_requires(content: str):
    """Return {varname: require_path} or {varname: (require_path, orig_prop)} for destructures."""
    requires = {}
    for m in REQUIRE_ASSIGN_RE.finditer(content):
        target, path = m.group(1), m.group(2)
        if target.startswith('{'):
            inner = target[1:-1]
            for part in inner.split(','):
                part = part.strip()
                if not part:
                    continue
                if ':' in part:
                    orig, alias = (p.strip() for p in part.split(':', 1))
                else:
                    orig = alias = part
                requires[alias] = (path, orig)
        else:
            requires[target] = path
    return requires


def parse_require_path(path: str):
    """Split a require() argument into (package_name, subpath)."""
    if path.startswith('@'):
        parts = path.split('/')
        pkg = '/'.join(parts[:2]) if len(parts) >= 2 else path
        subpath = '/'.join(parts[2:])
    else:
        parts = path.split('/')
        pkg = parts[0]
        subpath = '/'.join(parts[1:])
    return pkg, subpath


def package_dir_for(extracted_dir: Path, pkg: str):
    # Resolve to an absolute path so it stays consistent with the absolute
    # paths produced elsewhere (e.g. via Path.resolve() during subpath
    # resolution) -- otherwise relative_to() in copy_to_called_functions
    # silently fails and directory structure gets lost.
    candidate = Path(extracted_dir, *pkg.split('/')).resolve()
    if candidate.is_dir():
        # npm-pack style extraction sometimes nests an extra "package" folder
        if not (candidate / 'package.json').exists() and (candidate / 'package' / 'package.json').exists():
            return candidate / 'package'
        return candidate
    return None


def package_exists(extracted_dir: Path, pkg: str):
    return package_dir_for(extracted_dir, pkg) is not None


def find_pollution_call(content: str, requires: dict, extracted_dir: Path):
    """Return (require_path, chain[list[str]]) for the most likely pollution call, or None."""
    candidates = []

    for varname, val in requires.items():
        if isinstance(val, tuple):
            path, prop = val
        else:
            path, prop = val, None
        pkg, _ = parse_require_path(path)
        if pkg in NODE_BUILTINS or not package_exists(extracted_dir, pkg):
            continue
        pattern = re.compile(r'\b' + re.escape(varname) + r'((?:\s*\.\s*[A-Za-z_$][\w$]*)*)\s*\(')
        for m in pattern.finditer(content):
            chain = [c.strip() for c in m.group(1).split('.') if c.strip()]
            if prop:
                chain = [prop] + chain
            candidates.append((m.start(), path, chain))

    for m in INLINE_REQUIRE_CALL_RE.finditer(content):
        path = m.group(1)
        chain = [c.strip() for c in m.group(2).split('.') if c.strip()]
        pkg, _ = parse_require_path(path)
        if pkg in NODE_BUILTINS or not package_exists(extracted_dir, pkg):
            continue
        candidates.append((m.start(), path, chain))

    if not candidates:
        return None
    candidates.sort(key=lambda c: c[0])
    # The pollution call is almost always the last relevant invocation in the file
    # (payload is built first, then fired).
    _, path, chain = candidates[-1]
    return path, chain


# --------------------------------------------------------------------------
# Module resolution (approximates Node's resolver using package.json)
# --------------------------------------------------------------------------

def load_package_json(pkg_dir: Path):
    pj = pkg_dir / 'package.json'
    if pj.exists():
        try:
            return json.loads(pj.read_text(encoding='utf-8', errors='ignore'))
        except Exception:
            return {}
    return {}


def try_file_variants(base: Path):
    candidates = [
        base,
        Path(str(base) + '.js'),
        Path(str(base) + '.cjs'),
        base / 'index.js',
        base / 'index.cjs',
    ]
    for c in candidates:
        if c.is_file():
            return c
    return None


def resolve_exports_entry(exports_val, subpath):
    key = '.' if not subpath else f'./{subpath}'

    def unwrap(v):
        if isinstance(v, str):
            return v
        if isinstance(v, dict):
            for cond in ('require', 'node', 'default', 'import'):
                if cond in v:
                    r = unwrap(v[cond])
                    if r:
                        return r
        return None

    if isinstance(exports_val, str):
        return exports_val if key == '.' else None
    if isinstance(exports_val, dict):
        if key in exports_val:
            return unwrap(exports_val[key])
        if key == '.':
            return unwrap(exports_val)
    return None


def resolve_entry_file(extracted_dir: Path, pkg: str, subpath: str):
    pkg_dir = package_dir_for(extracted_dir, pkg)
    if pkg_dir is None:
        return None, None
    pkg_json = load_package_json(pkg_dir)

    if 'exports' in pkg_json:
        rel = resolve_exports_entry(pkg_json['exports'], subpath)
        if rel:
            found = try_file_variants((pkg_dir / rel).resolve())
            if found:
                return found, pkg_dir

    if subpath:
        found = try_file_variants(pkg_dir / subpath)
        if found:
            return found, pkg_dir
    else:
        main = pkg_json.get('main', 'index.js')
        found = try_file_variants(pkg_dir / main)
        if found:
            return found, pkg_dir
        found = try_file_variants(pkg_dir / 'index.js')
        if found:
            return found, pkg_dir

    return None, pkg_dir


def find_definition_file(entry_file: Path, chain, pkg_dir: Path, visited=None):
    """Follow local require() delegation to find the file that actually
    defines chain[0]; if it's not delegated elsewhere, assume it (and any
    remaining chain, e.g. prototype methods) lives in the current file."""
    if visited is None:
        visited = set()
    if entry_file is None or entry_file in visited:
        return entry_file
    visited.add(entry_file)

    if not chain:
        return entry_file

    try:
        content = entry_file.read_text(encoding='utf-8', errors='ignore')
    except Exception:
        return entry_file

    prop = chain[0]
    rel_path = None
    for template in (PROP_REQUIRE_RE_TEMPLATE, PROP_IN_OBJECT_RE_TEMPLATE):
        pattern = re.compile(template.format(prop=re.escape(prop)))
        m = pattern.search(content)
        if m:
            rel_path = m.group(1)
            break

    if rel_path is None:
        return entry_file  # defined in-file (class/prototype/object literal etc.)

    if rel_path.startswith('.'):
        next_file = try_file_variants((entry_file.parent / rel_path).resolve())
    else:
        next_file = try_file_variants((pkg_dir / rel_path).resolve())

    if next_file is None:
        return entry_file

    return find_definition_file(next_file, chain[1:], pkg_dir, visited)


# --------------------------------------------------------------------------
# Output
# --------------------------------------------------------------------------

def copy_to_called_functions(pkg: str, pkg_dir: Path, target_file: Path, output_root: Path):
    try:
        rel = target_file.relative_to(pkg_dir)
    except ValueError:
        rel = Path(target_file.name)
    dest = Path(output_root, pkg, rel)
    dest.parent.mkdir(parents=True, exist_ok=True)
    shutil.copy2(target_file, dest)
    return dest


def main():
    ap = argparse.ArgumentParser(description='Resolve prototype-pollution PoC calls to their source files')
    ap.add_argument('--pp-root', default='prototype-pollution')
    ap.add_argument('--extracted', default='extracted')
    ap.add_argument('--out', default='called_functions')
    ap.add_argument('--report', default=None, help='optional CSV report path')
    ap.add_argument('-v', '--verbose', action='store_true')
    args = ap.parse_args()

    pp_root = Path(args.pp_root)
    extracted_dir = Path(args.extracted)
    out_root = Path(args.out)

    if not pp_root.is_dir():
        sys.exit(f'error: {pp_root} is not a directory')
    if not extracted_dir.is_dir():
        sys.exit(f'error: {extracted_dir} is not a directory')

    test_files = find_test_files(pp_root)
    print(f'Found {len(test_files)} candidate test files.\n')

    rows = []
    successes, failures = [], []

    for tf in sorted(test_files):
        content = tf.read_text(encoding='utf-8', errors='ignore')
        requires = parse_requires(content)
        result = find_pollution_call(content, requires, extracted_dir)
        if result is None:
            failures.append((tf, 'no pollution call detected'))
            rows.append([tf, '', '', '', '', '', 'FAILED: no call detected'])
            continue

        require_path, chain = result
        pkg, subpath = parse_require_path(require_path)
        entry_file, pkg_dir = resolve_entry_file(extracted_dir, pkg, subpath)
        if entry_file is None:
            failures.append((tf, f'could not resolve entry file for {require_path!r}'))
            rows.append([tf, pkg, require_path, '.'.join(chain), '', '', 'FAILED: entry file not found'])
            continue

        target_file = find_definition_file(entry_file, chain, pkg_dir)
        if target_file is None:
            failures.append((tf, f'could not resolve definition file for chain {chain}'))
            rows.append([tf, pkg, require_path, '.'.join(chain), str(entry_file), '', 'FAILED: definition not found'])
            continue

        dest = copy_to_called_functions(pkg, pkg_dir, target_file, out_root)
        successes.append((tf, pkg, require_path, chain, target_file, dest))
        rows.append([tf, pkg, require_path, '.'.join(chain), str(target_file), str(dest), 'OK'])

        if args.verbose:
            print(f'[OK] {tf}')
            print(f'     package={pkg}  require={require_path!r}  chain={chain}')
            print(f'     source -> {target_file}')
            print(f'     copied -> {dest}\n')

    print('=' * 60)
    print(f'Done. {len(successes)} resolved, {len(failures)} failed.')
    if failures:
        print('\nNeeds manual review:')
        for tf, reason in failures:
            print(f'  - {tf}: {reason}')

    if args.report:
        report_path = Path(args.report)
        with report_path.open('w', newline='', encoding='utf-8') as f:
            w = csv.writer(f)
            w.writerow(['test_file', 'package', 'require_path', 'chain', 'source_file', 'copied_to', 'status'])
            w.writerows(rows)
        print(f'\nReport written to {report_path}')


if __name__ == '__main__':
    main()