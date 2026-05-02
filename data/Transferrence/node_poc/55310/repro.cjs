const assert = require('node:assert');

// This demonstrates that deepStrictEqual does not surface differences in Error.cause
// in the assertion message/diff.

try {
  assert.deepStrictEqual(
    new Error('a', { cause: new Error('x') }),
    new Error('a', { cause: new Error('y') })
  );
} catch (err) {
  console.error(String(err));
  console.error('\nFull error object:', err);
}
