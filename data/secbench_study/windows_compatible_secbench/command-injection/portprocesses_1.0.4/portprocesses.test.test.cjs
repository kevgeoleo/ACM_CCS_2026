// test("Command Injection in portprocesses", () => {
//   expect.assertions(2);
  const portprocesses = require("portprocesses");
  const fs = require("fs");
  const path = "./portprocesses";
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
  return portprocesses.killProcess(" & fsutil file createnew portprocesses 0").finally(() => {
    file_exist = fs.existsSync(path);
console.log("{ " + file_exist + ", " + true + " }");
    fs.unlink(path, () => {});
  });
// });
