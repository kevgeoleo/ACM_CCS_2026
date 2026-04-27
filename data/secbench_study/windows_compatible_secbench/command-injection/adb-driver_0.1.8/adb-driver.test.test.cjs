// test("Command Injection in adb-driver", () => {
//   expect.assertions(2);
  const root = require("adb-driver");
  const fs = require("fs");
  const path = "./adb-driver";
  try {
    if (fs.existsSync(path)) {
      fs.unlinkSync(path);
    }
  } catch (err) {
    console.error(err);
  }
  file_exist = fs.existsSync(path);
console.log("{ " + file_exist + ", " + false + " }");
  return root.execADBCommand(" & fsutil file createnew adb-driver 0").finally(() => {
    file_exist = fs.existsSync(path);
console.log("{ " + file_exist + ", " + true + " }");
    fs.unlink(path, function (err) {});
  });
// });
