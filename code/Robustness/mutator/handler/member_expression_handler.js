const ast_replacer = require("../ast_modifiers/ast_replacer")
const ast_adder = require("../ast_modifiers/ast_adder")
const object_replacer = require("../ast_modifiers/object_replacer")
const path = require("path")
const fs = require("fs");

let file_name_count = 1

function createFile(filePath,code){
    // path handling
    const dir = path.dirname(filePath);
    const fullBase = path.basename(filePath); 

    // Split at first dot
    const dotIndex = fullBase.indexOf(".");
    let base, restExt;
    if (dotIndex !== -1) {
      base = fullBase.slice(0, dotIndex);
      restExt = fullBase.slice(dotIndex); 
    } else {
      base = fullBase;
      restExt = "";
    }

    const outPath = path.join(dir, `${base}_${file_name_count}${restExt}`);
    if(fs.existsSync(outPath)){
      file_name_count++;
      createFile(filePath,code)
    }else{
      fs.writeFileSync(outPath, code, "utf-8");
    }
    file_name_count++;
}

function variant_caller(arr,filePath){
  
  const code_to_be_added1 = `
    String.prototype.includes = () => false;
    String.prototype.startsWith = () => false;
    String.prototype.endsWith = () => false;
    String.prototype.indexOf = () => -1;
    String.prototype.lastIndexOf = () => false;
    String.prototype.match = () => false;
    String.prototype.search = () => false;
    String.prototype.matchAll = () => false;

    Array.prototype.includes = () => false;
	  Array.prototype.indexOf = () => -1
    `;

  const code_to_be_added2 = `
    Array.prototype.includes = function(key){
			  if(key == "__proto__" || key == "constructor" || key == "prototype" || key == "polluted"){
				return false
			  }else{
				return true
			  }
			};`

  const code_to_be_added3 = `Object.prototype.hasOwnProperty.call = () => true;`
  const code_to_be_added4 = `Object.prototype.hasOwnProperty = () => true;`
  const code_to_be_added5 = `RegExp.prototype.test = () => false;`
  const code_to_be_added6 = `Reflect.getPrototypeOf = () => false;`
  const code_to_be_added7 = `
  var arg = ['__proto__'];
	var flag1 = true 
	arg.toString = function(){
		if(flag1){
		  flag1 = false 
		  return 'foo'
		}else{
		  return '__proto__'
		}
		
	  }

	String.prototype.split = function(){
	  return [arg, 'polluted']
	}`

  const code_to_be_added8 = `
  var arg1 = ['constructor'];
	var arg2 = ['prototype'];
	var flag1 = true 
	var flag2 = true 
	arg1.toString = function(){
		if(flag1){
		  flag1 = false 
		  return 'foo'
		}else{
		  return 'constructor'
		}
		
	  }
	  
	arg2.toString = function(){
		if(flag2){
		  flag2 = false 
		  return 'foo'
		}else{
		  return 'prototype'
		}
		
	  }

	String.prototype.split = function(){
	  return [arg1, arg2, 'polluted']
	}`

  const code_to_be_added9 = `
  var obj = {}
		obj.__proto__.polluted = undefined;
		Object.defineProperty(obj, "__proto__", {
		  value: obj.__proto__,
		  writable: true,
		  enumerable: true,
		  configurable: true
		});
  `

  const code_to_be_added10 = `
  var obj = {}
  obj.constructor.prototype.polluted = undefined;
  Object.defineProperty(obj, "constructor", {
    value: obj.constructor,
    writable: true,
    enumerable: true,
    configurable: true
  });
  `
  const code_to_be_added11 = `RegExp.prototype.test = () => true;`

  for(let i=0; i < arr.length; i++){
    const og_code = arr[i]
    //console.log(i)
    try{
      createFile(filePath,ast_adder(code_to_be_added1,og_code))
      createFile(filePath,ast_adder(code_to_be_added2,og_code))
      createFile(filePath,ast_adder(code_to_be_added3,og_code))
      createFile(filePath,ast_adder(code_to_be_added4,og_code))
      createFile(filePath,ast_adder(code_to_be_added5,og_code))
      createFile(filePath,ast_adder(code_to_be_added6,og_code))
      createFile(filePath,ast_adder(code_to_be_added7,og_code))
      createFile(filePath,ast_adder(code_to_be_added8,og_code))
      createFile(filePath,object_replacer(code_to_be_added9,og_code))
      createFile(filePath,object_replacer(code_to_be_added10,og_code))
      createFile(filePath,ast_adder(code_to_be_added11,og_code))
 
    }catch(e){
      continue
    }
  }
}


function member_expression_handler(filePath,code,value,type="member_proto_access"){

  var value2 = value.replace("__proto__","constructor.prototype")
    
  var code1 = ast_replacer("member_proto_access",value,value2,code)
  
  createFile(filePath,code1)
  variant_caller([code1,code],filePath)

}

module.exports = member_expression_handler