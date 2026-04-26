// test("ReDos in mobile-detect", () => {
  const genstr = require("../utils").genstr;
  const measureTime = require("../utils").measureTime;
  const MobileDetect = require("mobile-detect");
  let t = measureTime(function () {
    let md = new MobileDetect(genstr(12500, "Dell"));
    md.phone();
  });
  let time = t[0] + t[1] / 1000000000;
if (time > 1) {
	console.log("this_is_vulnerable")
} else {
	console.log("this_is_OK")
}
// });
