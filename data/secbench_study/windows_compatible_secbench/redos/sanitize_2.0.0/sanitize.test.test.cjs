// test("ReDos in sanitize", () => {
  const measureTime = require("../utils").measureTime;
  const sanitize = require("sanitize");
  const sanitizer = sanitize();
  let t = measureTime(function () {
    sanitizer.my.url("a" + ("." + "a".repeat(55)).repeat(4) + "#");
  });
  let time = t[0] + t[1] / 1000000000;
if (time > 1) {
	console.log("this_is_vulnerable")
} else {
	console.log("this_is_OK")
}
// });
