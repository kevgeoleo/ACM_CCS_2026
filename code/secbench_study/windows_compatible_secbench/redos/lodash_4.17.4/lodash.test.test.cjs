// test("ReDos in lodash", () => {
  const genstr = require("../utils").genstr;
  const measureTime = require("../utils").measureTime;
  const _ = require("lodash");
  let t = measureTime(function () {
    let agent = _.lowerCase(genstr(50000, "A"));
  });
  let time = t[0] + t[1] / 1000000000;
if (time > 1) {
	console.log("this_is_vulnerable")
} else {
	console.log("this_is_OK")
}
// });
