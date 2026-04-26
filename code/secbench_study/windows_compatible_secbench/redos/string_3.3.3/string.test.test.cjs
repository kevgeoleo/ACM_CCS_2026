// test("ReDos in string", () => {
  const genstr = require("../utils").genstr;
  const measureTime = require("../utils").measureTime;
  const string = require("string");
  let t = measureTime(function () {
    string(genstr(50000, "9")).underscore();
  });
  let time = t[0] + t[1] / 1000000000;
if (time > 1) {
	console.log("this_is_vulnerable")
} else {
	console.log("this_is_OK")
}
// });
