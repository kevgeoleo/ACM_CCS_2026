// //https://security.snyk.io/vuln/SNYK-JS-TRIMOFFNEWLINES-1296850
// test("ReDos in trim-off-newlines", () => {
  const measureTime = require("../utils").measureTime;
  const trim = require("trim-off-newlines");

  const s = "a" + "\n".repeat(45000) + "a";

  let t = measureTime(function () {
    trim(s);
  });

  let time = t[0] + t[1] / 1000000000;

if (time > 1) {
	console.log("this_is_vulnerable")
} else {
	console.log("this_is_OK")
}
// });
