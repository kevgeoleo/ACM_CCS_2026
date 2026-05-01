// test("ReDos in html-parse-stringify2", () => {
  const genstr = require("../utils").genstr;
  const measureTime = require("../utils").measureTime;
  const HTML = require("html-parse-stringify2");
  let html = "<!''''''''''''''''''''''''''''''''''''''''!";
  let t = measureTime(function () {
    let ast = HTML.parse(html);
  });
  let time = t[0] + t[1] / 1000000000;
if (time > 1) {
	console.log("this_is_vulnerable")
} else {
	console.log("this_is_OK")
}
// });
