const acorn = require("acorn");
const estraverse = require("estraverse");
const escodegen = require("escodegen");


function getMemberChain(node) {
  const parts = [];

  while (node && node.type === "MemberExpression") {
    if (node.property.type === "Identifier") {
      parts.unshift(node.property.name);
    } else if (node.property.type === "Literal") {
      parts.unshift(node.property.value);
    }
    node = node.object;
  }

  if (node.type === "Identifier") {
    parts.unshift(node.name);
  }

  return parts;
}


function buildMemberExpression(chain) {
  let node = {
    type: "Identifier",
    name: chain[0]
  };

  for (let i = 1; i < chain.length; i++) {
    node = {
      type: "MemberExpression",
      object: node,
      property: {
        type: "Identifier",
        name: chain[i]
      },
      computed: false
    };
  }

  return node;
}




function evaluateArray(node) {
  if (node.type !== "ArrayExpression") return null;
  const arr = [];

  for (const el of node.elements) {
    if (!el) {
      arr.push(null);
    } else if (el.type === "Literal") {
      arr.push(el.value);
    } else if (el.type === "ArrayExpression") {
      arr.push(evaluateArray(el));
    } else {
      arr.push(null); 
    }
  }

  return arr;
}


function buildArrayAST(arr) {
  return {
    type: "ArrayExpression",
    elements: arr.map(el => {
      if (Array.isArray(el)) {
        return buildArrayAST(el);
      }
      return {
        type: "Literal",
        value: el,
        raw: JSON.stringify(el)
      };
    })
  };
}


function ast_replacer(type, fromValue, toValue, code) {
  const ast = acorn.parse(code, {
    ecmaVersion: "latest",
    sourceType: "script"
  });

  const arrayStack = [];

  estraverse.replace(ast, {
    enter(node) {
      if (node.type === "ArrayExpression") {
        arrayStack.push(node);
      }

      // string_literal
      if (
        type === "string_literal" &&
        node.type === "Literal" &&
        typeof node.value === "string" &&
        node.value === fromValue
      ) { 
        console.log(toValue)       
        node.value = toValue;
        node.raw = JSON.stringify(toValue);
        return node;
      }

      // template_literal
      if (
        type === "template_literal" &&
        node.type === "TemplateElement" &&
        (node.value.raw === fromValue || node.value.cooked === fromValue)
      ) {
        node.value.raw = toValue;
        node.value.cooked = toValue;
        return node;
      }

      // object_key
      if (
        type === "object_key" &&
        node.type === "Property"
      ) {
        if (
          (node.key.type === "Literal" && node.key.value === fromValue) ||
          (node.key.type === "Identifier" && node.key.name === fromValue)
        ) {
          node.key = {
            type: "Literal",
            value: toValue,
            raw: JSON.stringify(toValue)
          };
          return node;
        }
      }

      // object_value
      if (
        type === "object_value" &&
        node.type === "Property" &&
        node.value.type === "Literal" &&
        node.value.value === fromValue
      ) {
        node.value.value = toValue;
        node.value.raw = JSON.stringify(toValue);
        return node;
      }

      // array_with_proto 
      if (type === "array_with_proto" && node.type === "ArrayExpression") {
        const fullArray = evaluateArray(node);

        if (JSON.stringify(fullArray) === JSON.stringify(fromValue)) {
            return buildArrayAST(toValue);
        }
      }

      //member expression
      if (
        type === "member_proto_access" &&
        node.type === "MemberExpression" &&
        this.parent?.type !== "MemberExpression"
        ) {
            const chain = getMemberChain(node);
            const raw = chain.join(".");

            if (raw === fromValue) {
                const newChain = toValue.split(".");
                return buildMemberExpression(newChain);
            }
        }

      if (
        type === "object_with_proto" &&
        node.type === "Property"
      ) {
        if (
          (node.key.type === "Literal" && node.key.value === fromValue) ||
          (node.key.type === "Identifier" && node.key.name === fromValue)
        ) {
          node.key = {
            type: "Literal",
            value: toValue,
            raw: JSON.stringify(toValue)
          };
          return node;
        }
      }
    },

    leave(node) {
      if (node.type === "ArrayExpression") {
        arrayStack.pop();
      }
    }
  });

  return escodegen.generate(ast);
}

module.exports = ast_replacer;
