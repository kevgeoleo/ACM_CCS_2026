// test("ReDos in tough-cookie", () => {
  const genstr = require("../utils").genstr;
  const measureTime = require("../utils").measureTime;
  const tough = require("tough-cookie");
  let str = "x" + genstr(50000, " ") + "x";
  let Cookie = tough.Cookie;
  let t = measureTime(function () {
    var cookie = Cookie.parse(str);
  });
  let time = t[0] + t[1] / 1000000000;
if (time > 1) {
	console.log("this_is_vulnerable")
} else {
	console.log("this_is_OK")
}
// });
