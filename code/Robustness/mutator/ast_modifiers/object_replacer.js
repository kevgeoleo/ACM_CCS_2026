const acorn = require("acorn");
const estraverse = require("estraverse");
const escodegen = require("escodegen");

function object_replacer(code_to_be_added, original_code) {

  // Parse added code
  const addAst = acorn.parse(code_to_be_added, {
    ecmaVersion: "latest",
    sourceType: "script"
  });

  // Parse original code
  const originalAst = acorn.parse(original_code, {
    ecmaVersion: "latest",
    sourceType: "script"
  });

  // Replace {} arguments with `obj`
  estraverse.replace(originalAst, {
    enter(node) {
      // Look for function calls
      if (node.type === "CallExpression") {
        node.arguments = node.arguments.map(arg => {
          // Match empty object literal {}
          if (
            arg.type === "ObjectExpression" &&
            arg.properties.length === 0
          ) {
            return {
              type: "Identifier",
              name: "obj"
            };
          }
          return arg;
        });
      }
    }
  });

  // Prepend injected code
  originalAst.body = [
    ...addAst.body,
    ...originalAst.body
  ];

  return escodegen.generate(originalAst);
}

module.exports = object_replacer;
