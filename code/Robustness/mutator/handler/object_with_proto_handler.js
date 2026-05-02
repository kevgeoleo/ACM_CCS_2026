const object_replacer = require("../object_replacer")
const ast_replacer = require("../ast_replacer")
const ast_adder = require("../ast_adder")
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



function object_with_proto_handler(filePath,code,value,type="object_with_proto"){

  // only regex2 is needed, but everything is included anyway 
  console.log('object_with_proto_handler not implemented')

}

module.exports = object_with_proto_handler