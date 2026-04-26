const acorn = require("acorn");
const escodegen = require("escodegen");

function ast_adder(code_to_be_added, original_code) {
  // Parse both code snippets
  const addAst = acorn.parse(code_to_be_added, {
    ecmaVersion: "latest",
    sourceType: "script"
  });

  const originalAst = acorn.parse(original_code, {
    ecmaVersion: "latest",
    sourceType: "script"
  });

  // Prepend statements
  originalAst.body = [
    ...addAst.body,
    ...originalAst.body
  ];

  // Generate code back
  return escodegen.generate(originalAst);
}

module.exports = ast_adder;
