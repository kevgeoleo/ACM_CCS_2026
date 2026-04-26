// test("ReDos in url-regex", () => {
  const genstr = require("../utils").genstr;
  const measureTime = require("../utils").measureTime;
  let t = measureTime(function () {
    require("url-regex")({ strict: false }).test(
      "018137.113.425.552.100.215.144.175250.45.147.1364868726sgdm6nohQ"
    );
  });
  let time = t[0] + t[1] / 1000000000;
if (time > 1) {
	console.log("this_is_vulnerable")
} else {
	console.log("this_is_OK")
}
// });
