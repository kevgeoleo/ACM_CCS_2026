// extractor.js
// Supports BOTH: 
//   node extractor.js "<code>"
//   echo "<code>" | node extractor.js

const acorn = require("acorn");
const estraverse = require("estraverse");
const path = require("path")
const fs = require("fs");
//const ast_replacer = require("./ast_replacer")
const string_literal_handler = require("./handler/string_literal_handler")
const object_key_handler = require("./handler/object_key_handler")
const template_literal_handler = require("./handler/template_literal_handler")
const array_with_proto_handler = require("./handler/array_with_proto_handler")
const member_expression_handler = require("./handler/member_expression_handler")
const regular_mutator = require("./handler/regular_mutator")


function getMemberChain(node) {
  const chain = [];

  let current = node;

  while (current && current.type === "MemberExpression") {
    const prop = current.property;

    if (prop.type === "Identifier") {
      chain.unshift(prop.name);
    } else if (prop.type === "Literal") {
      chain.unshift(String(prop.value));
    } else {
      chain.unshift(null);
    }

    current = current.object;
  }

  // root object
  if (current?.type === "Identifier") {
    chain.unshift(current.name);
  }

  return chain;
}



// objects can have object within object, so this is there to basically identify 
// and convert it into complete object as is in the code 
function evaluateObject(node) {
  if (node.type !== "ObjectExpression") return null;

  //const obj = {};
  const obj = Object.create(null);


  for (const prop of node.properties) {
    if (prop.type !== "Property") continue;

    // Only handle static keys
    let key;
    if (prop.key.type === "Literal") {
      key = prop.key.value;
    } else if (prop.key.type === "Identifier") {
      key = prop.key.name;
    } else {
      continue;
    }

    // Static values only
    let value = null;
    if (prop.value.type === "Literal") {
      value = prop.value.value;
    } else if (prop.value.type === "ObjectExpression") {
      value = evaluateObject(prop.value);
    } else if (prop.value.type === "ArrayExpression") {
      value = evaluateArray(prop.value);
    }

    obj[key] = value;
  }

  return obj;
}


// array expressions can have array within array, so this is there to basically identify 
// and convert it into complete array as is in the code 
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
      arr.push(null); // could extend to objects if needed
    }
  }

  return arr;
}


//console.log('foo')
function processCode(code, file_path = "<unknown>") {
  let ast;

  try {
    ast = acorn.parse(code, {
      ecmaVersion: "latest",
      sourceType: "script"
    });
  } catch (err) {
    console.error(JSON.stringify({ error: "Parse error", details: err.message }));
    process.exit(1);
  }

  const findings = [];

  function addFinding(type, value) {
    findings.push({ type, value});
  }

  estraverse.traverse(ast, {
    enter(node) {

        // Template literals
        if (node.type === "TemplateElement") {
          if (node.value.raw.includes("__proto__")) {
              addFinding("template_literal", node.value.raw);
              this.break();
          }
        }

        // Object literal keys and values
        if (node.type === "Property") {
        if (node.key.type === "Literal" && typeof node.key.value === "string") {
            if (node.key.value.includes("__proto__")) {
              addFinding("object_key", node.key.value);
              this.break();
            }
        }

        if (node.key.type === "Identifier") {
            if (node.key.name.includes("__proto__")) {
              addFinding("object_key", node.key.name);
              this.break();
            }
        }

        if (node.value.type === "Literal" && typeof node.value.value === "string") {
            if (node.value.value.includes("__proto__")) {
              addFinding("object_value", node.value.value);
              this.break();
            }
        }
        }

        // Object expression 
        if (node.type === "ObjectExpression") {
          const obj = evaluateObject(node);

          function containsProtoKey(o) {
            if (!o || typeof o !== "object") return false;

            if (Object.prototype.hasOwnProperty.call(o, "__proto__")) {
              return true;
            }

            return Object.values(o).some(v => containsProtoKey(v));
          }

          if (containsProtoKey(obj)) {
            addFinding("object_with_proto", obj);
            //this.break();
          }
        }

        //Member expression
        if (node.type === "MemberExpression") {
          const chain = getMemberChain(node);
          if (chain.includes("__proto__")) {
            //addFinding("member_proto_access", { chain,raw: chain.join(".")});
            addFinding("member_proto_access", chain.join("."));
            this.break();
          }
        }

        
        // Array Expressions
        if (node.type === "ArrayExpression") {
          const fullArray = evaluateArray(node);

          // Check if it contains "__proto__" anywhere recursively
          function containsProto(val) {
            if (Array.isArray(val)) return val.some(containsProto);
            return val === "__proto__";
          }

          if (containsProto(fullArray)) {
            addFinding("array_with_proto", fullArray, node.loc);
            //this.break();
          }
        }

        // Literal strings
        if (node.type === "Literal" && typeof node.value === "string") {
          if (node.value.includes("__proto__")) {
            addFinding("string_literal", node.value);
            this.break();
          }
        }
    }
    });

    /*console.log(JSON.stringify({
    file: file_path,
    findings
  }, null, 2));*/
  return findings 
  //console.log(JSON.stringify({ findings }, null, 2));
}



// Input handling
let filePath = "";
process.stdin.setEncoding("utf-8");

process.stdin.on("data", chunk => { 
  filePath += chunk; 
});

process.stdin.on("end", () => {
  //processCode(input);
  const code = fs.readFileSync(filePath, "utf-8");
  var findings = processCode(code, filePath);
    var else_is_safe = true 

    if(findings.length == 0){
        regular_mutator(filePath,code)
        console.log('foo')
      }
    for (const finding of findings) {
      if(finding.type == 'array_with_proto'){
        else_is_safe = false 
        array_with_proto_handler(filePath,code,finding.value)
      }else if(finding.type=="member_proto_access"){
        //console.log(finding.value)
        member_expression_handler(filePath,code,finding.value)
      }
      else if (typeof finding.value === "object" && finding.value !== null) {
        console.log(finding.value)

      } else if(else_is_safe){
        //console.log(finding.type, finding.value);

        if(finding.type == "template_literal"){
          template_literal_handler(filePath,code,finding.value)
        }else if(finding.type == "object_key"){
          object_key_handler(filePath,code,finding.value)
        }else if(finding.type == "string_literal"){
          string_literal_handler(filePath,code,finding.value,finding.type)
        }else if(finding.type == "object_value"){
          string_literal_handler(filePath,code,finding.value,finding.type)
        }else{
          regular_mutator(filePath,code)
        }

      }
      
      
    }
});

