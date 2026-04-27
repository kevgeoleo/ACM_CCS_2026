// test("ReDos in highlight.js", () => {
  const measureTime = require("../utils").measureTime;
  let hljs = require("highlight.js/lib/core");
  let r = require("highlight.js/lib/languages/r");
  hljs.registerLanguage("r", r);
  let t = measureTime(function () {
    hljs.highlight(
      "r",
      "#' @param `x" + "\\_".repeat(22) + "_ code{numeric} foobar"
    ).value;
  });
  let time = t[0] + t[1] / 1000000000;
if (time > 1) {
	console.log("this_is_vulnerable")
} else {
	console.log("this_is_OK")
}
// });
