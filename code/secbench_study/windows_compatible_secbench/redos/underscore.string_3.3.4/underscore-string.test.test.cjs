// test("ReDos in underscore.string", () => {
  const genstr = require("../utils").genstr;
  const measureTime = require("../utils").measureTime;
  const us = require("underscore.string");
  let t = measureTime(function () {
    var agent = us.unescapeHTML(genstr(50000, "&"));
  });
  let time = t[0] + t[1] / 1000000000;
if (time > 1) {
	console.log("this_is_vulnerable")
} else {
	console.log("this_is_OK")
}
// });
