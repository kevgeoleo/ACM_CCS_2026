// test("ReDoS in charset", () => {
  const measureTime = require("../utils").measureTime;
  const charset = require("charset");
  let t = measureTime(function () {
    charset("encoding=" + " ".repeat(40000));
  });
  let time = t[0] + t[1] / 1000000000;
if (time > 1) {
	console.log("this_is_vulnerable")
} else {
	console.log("this_is_OK")
}
// });
