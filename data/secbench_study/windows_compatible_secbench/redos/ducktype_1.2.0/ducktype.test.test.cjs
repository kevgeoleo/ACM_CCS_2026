// test("ReDos in ducktype", () => {
  const measureTime = require("../utils").measureTime;
  const ducktype = require("ducktype");
  let attack_str = "https://" + ("." + "a".repeat(110)).repeat(7) + "\n";
  let t = measureTime(function () {
//     console.log(ducktype.url.test(attack_str));
  });
  let time = t[0] + t[1] / 1000000000;
if (time > 1) {
	console.log("this_is_vulnerable")
} else {
	console.log("this_is_OK")
}
// });
