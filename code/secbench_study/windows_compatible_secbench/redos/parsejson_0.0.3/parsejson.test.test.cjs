// test("ReDos in parsejson", () => {
  const genstr = require("../utils").genstr;
  const measureTime = require("../utils").measureTime;
  const parsejson = require("parsejson");
  let t = measureTime(function () {
    parsejson('{"a":"' + genstr(50000, " ") + '"}');
  });
  let time = t[0] + t[1] / 1000000000;
if (time > 1) {
	console.log("this_is_vulnerable")
} else {
	console.log("this_is_OK")
}
// });
