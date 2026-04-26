// test("Command Injection in ffmpeg-sdk", () => {
//   expect.assertions(2);
  const root = require("ffmpeg-sdk");
  const fs = require("fs");
  const path = "./ffmpeg-sdk";
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
  return root
    .execute("fsutil file createnew ffmpeg-sdk 0")
    .then(() => {})
    .catch((err) => {})
    .finally(() => {
      file_exist = fs.existsSync(path);
console.log("{ " + file_exist + ", " + true + " }");
      fs.unlink(path, function (err) {});
    });
// });
