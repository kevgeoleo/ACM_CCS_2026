// //https://snyk.io/vuln/SNYK-JS-IONPARSER-1048971
// test("prototype pollution in ion-parser", () => {
  const fs = require("fs");
  const path = require("path");
  const ION = require("ion-parser");

  let obj = {};
console.log({}.polluted);

  ION.parse(
    fs.readFileSync(path.resolve(__dirname, "./payload.toml"), "utf-8")
  );
console.log({}.polluted);
// });
