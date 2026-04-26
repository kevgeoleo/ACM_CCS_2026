// test("ReDos in no-case", () => {
  const genstr = require("../utils").genstr;
  const measureTime = require("../utils").measureTime;
  const cc = require("no-case");
  let t = measureTime(function () {
    cc(genstr(50000, "X"));
  });
  let time = t[0] + t[1] / 1000000000;
if (time > 1) {
	console.log("this_is_vulnerable")
} else {
	console.log("this_is_OK")
}
// });
