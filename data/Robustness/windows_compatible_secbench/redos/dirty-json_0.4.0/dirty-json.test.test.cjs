// test("ReDoS in dirty-json", () => {
  const dJSON = require("dirty-json");
  const measureTime = require("../utils").measureTime;
  let t = measureTime(function () {
    dJSON.parse(`{ test: "${"x".repeat(24)}\\`);
  });
  let time = t[0] + t[1] / 1000000000;
if (time > 1) {
	console.log("this_is_vulnerable")
} else {
	console.log("this_is_OK")
}
// });
