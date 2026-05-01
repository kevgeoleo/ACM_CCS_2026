// test("ReDos in trim", () => {
  const measureTime = require("../utils").measureTime;
  const trim = require("trim");
  let t = measureTime(function () {
    trim("1" + " ".repeat(50000) + "1");
  });
  let time = t[0] + t[1] / 1000000000;
if (time > 1) {
	console.log("this_is_vulnerable")
} else {
	console.log("this_is_OK")
}
// });
