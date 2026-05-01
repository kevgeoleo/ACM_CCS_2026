const ast_replacer = require("../ast_modifiers/ast_replacer")
const ast_adder = require("../ast_modifiers/ast_adder")
const object_replacer = require("../ast_modifiers/object_replacer")
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

    // ---- file 1 ----
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

  //console.log(value,":",typeof value)  //obj.__proto__.polluted : string
  var value2 = value.replace("__proto__","constructor.prototype")
  //var value3 = value.replace("__proto__","\\x5F\\x5Fproto\\x5F\\x5F")
  //var value4 = value.replace("__proto__","\\u005F\\u005Fproto\\u005F\\u005F")
    
  var code1 = ast_replacer("member_proto_access",value,value2,code)
  //var code2 = ast_replacer("member_proto_access",value,value3,code)
  //var code3 = ast_replacer("member_proto_access",value,value4,code)
  
  createFile(filePath,code1)
  //createFile(filePath,code2)
  //createFile(filePath,code3)
  variant_caller([code1,code],filePath)

  /*if(value.length == 1){
    //console.log(value," : ",value[0])
    if(value[0] == "__proto__" && !Array.isArray(value[0])){

      var code1 = ast_replacer("member_proto_access",value,["constructor.prototype"],code)
      var code2 = ast_replacer("member_proto_access",value,["constructor","prototype"],code)
      createFile(filePath,code1)
      createFile(filePath,code2)

    }else if(Array.isArray(value[0]) && value[0].length === 1 && value[0][0] === "__proto__"){

      var code1 = ast_replacer("member_proto_access",value,[["constructor"],["prototype"]],code)
      createFile(filePath,code1)

    }else{

      console.log('edge case array proto 1')

    }
  }else if(value.length == 2){
    if(Array.isArray(value[0]) && value[0].length === 1 && value[0][0] === "__proto__"){
      var code1 = ast_replacer("member_proto_access",value,[["constructor"],["prototype"],value[1]],code)
      createFile(filePath,code1)
    }else if(typeof value[0] == 'string' && value[0] == '__proto__'){
      console.log('here')
      var code1 = ast_replacer("member_proto_access",value,["constructor","prototype",value[1]],code)
      var code2 = ast_replacer("member_proto_access",value,["constructor.prototype",value[1]],code)
      createFile(filePath,code1)
      createFile(filePath,code2)
    }
  }
  /*if(value == "__proto__"){
    if(type == "member_proto_access"){
      var code1 = ast_replacer("member_proto_access","__proto__","constructor.prototype",code)
      var code2 = ast_replacer("member_proto_access","__proto__",["'constructor'","'prototype'"],code)
      createFile(filePath,code1)
      createFile(filePath,code2)
    }else if(type == "object_value"){
      var code1 = ast_replacer("object_value","__proto__","constructor.prototype",code)
      createFile(filePath,code1)
    }
    
  }else if(regex1.test(value)){
    var match = value.match(regex1);
    var some_string = match[1];

    var code1 = ast_replacer("member_proto_access",value,"constructor.prototype." + some_string, code)
    createFile(filePath,code1)
  
  }else if(regex2.test(value)){
    var match = value.match(regex2);
    var some_string = match[1];
    var some_other_string = match[2];

    var code1 = ast_replacer("member_proto_access",value,`{"constructor": {"prototype": {"${some_string}":"${some_other_string}"}}}`, code)
    var code2 = ast_replacer("member_proto_access",value,`{"constructor.prototype": {"${some_string}":"${some_other_string}"}}`, code)
    createFile(filePath,code1)
    createFile(filePath,code2)
  }else if(regex3.test(value)){
    var match = value.match(regex3);
    var some_string = match[1];
    var some_other_string = match[2];
    var another_string = match[3]

    var code1 = ast_replacer("member_proto_access",value,`{"${some_string}": {"constructor": {"prototype": {"${some_other_string}":"${another_string}"}}}}`, code)
    var code2 = ast_replacer("member_proto_access",value,`{"${some_string}": {"constructor.prototype": {"${some_other_string}":"${another_string}"}}}`, code)
    createFile(filePath,code1)
    createFile(filePath,code2)
  }else if(regex4.test(value)){
    var match = value.match(regex4);
    var some_string = match[1];

    var code1 = ast_replacer("member_proto_access",value,`/constructor/prototype/${some_string}`, code)
    createFile(filePath,code1)
  }else if(regex5.test(value)){
    var match = value.match(regex5);
    var some_string = match[1];

    var code1 = ast_replacer("member_proto_access",value,`constructor/prototype/${some_string}`, code)
    createFile(filePath,code1)
  }else if(regex6.test(value)){
    var match = value.match(regex6);
    var some_string = match[1];
    var some_other_string = match[2]

    var code1 = ast_replacer("member_proto_access",value,`constructor.prototype[${some_string}]=${some_other_string}`, code)
    var code2 = ast_replacer("member_proto_access",value,`constructor[prototype][${some_string}]=${some_other_string}`, code)
    createFile(filePath,code1)
    createFile(filePath,code2)
  }else if(regex7.test(value)){
    var match = value.match(regex7);
    var some_string = match[1];

    var code1 = ast_replacer("member_proto_access",value,`constructor.prototype[${some_string}]`, code)
    var code2 = ast_replacer("member_proto_access",value,`constructor[prototype][${some_string}]`, code)
    createFile(filePath,code1)
    createFile(filePath,code2)
  }else if(regex8.test(value)){
    var match = value.match(regex8);
    var some_string = match[1];

    var code1 = ast_replacer("member_proto_access",value,`[constructor.prototype/${some_string}]`, code)
    var code2 = ast_replacer("member_proto_access",value,`[constructor/prototype/${some_string}]`, code)
    createFile(filePath,code1)
    createFile(filePath,code2)
  }else if(regex9.test(value)){
    var match = value.match(regex9);
    var some_string = match[1];

    var code1 = ast_replacer("member_proto_access",value,`[constructor.prototype,${some_string}]`, code)
    var code2 = ast_replacer("member_proto_access",value,`[constructor,prototype,${some_string}]`, code)
    createFile(filePath,code1)
    createFile(filePath,code2)
  }else if(regex10.test(value)){
    var match = value.match(regex10);
    var some_string = match[1];

    var code1 = ast_replacer("member_proto_access",value,`["constructor.prototype","${some_string}"]`, code)
    var code2 = ast_replacer("member_proto_access",value,`["constructor","prototype","${some_string}"]`, code)
    createFile(filePath,code1)
    createFile(filePath,code2)
  }else if(regex11.test(value)){
    var match = value.match(regex11);
    var some_string = match[1];
    var some_other_string = match[2];

    var code1 = ast_replacer("member_proto_access",value,`[constructor.prototype]\n${some_string}=${some_other_string}`, code)
    var code2 = ast_replacer("member_proto_access",value,`[constructor][prototype]\n${some_string}=${some_other_string}`, code)
    createFile(filePath,code1)
    createFile(filePath,code2)
  }else if(regex12.test(value)){
    var match = value.match(regex12);
    var some_string = match[1];
    var some_other_string = match[2];


    var code1 = ast_replacer("member_proto_access",value,`{{constructor.prototype.${some_string}=${some_other_string}}}`, code)
    createFile(filePath,code1)
  }else if(regex13.test(value)){
    var match = value.match(regex13);
    var some_string = match[1];
    var some_other_string = match[2];

    var code1 = ast_replacer("member_proto_access",value,`{{constructor.prototype.${some_string}="${some_other_string}"}}`, code)
    createFile(filePath,code1)
  }else if(regex14.test(value)){
    var match = value.match(regex14);
    var some_string = match[1];
    var some_other_string = match[2];

    var code1 = ast_replacer("member_proto_access",value,`${some_string}.constructor.prototype.${some_other_string}`, code)
    createFile(filePath,code1)
  }*/

}

module.exports = member_expression_handler