// test("ReDos in remove-markdown", () => {
  const measureTime = require("../utils").measureTime;
  const removeMarkdown = require("remove-markdown");
  const paragraph =
    '\n## This is a long "' + " ".repeat(200) + '" heading ##\n';
  let t = measureTime(function () {
    removeMarkdown(paragraph);
  });
  let time = t[0] + t[1] / 1000000000;
if (time > 1) {
	console.log("this_is_vulnerable")
} else {
	console.log("this_is_OK")
}
// });
