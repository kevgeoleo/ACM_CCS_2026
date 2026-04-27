// test("ReDos in htmlparser", () => {
  const genstr = require("../utils").genstr;
  const measureTime = require("../utils").measureTime;
  const htmlparser = require("htmlparser");
  let rawHtml = "<html><x" + genstr(50000, " ") + "x></html>";
  let handler = new htmlparser.DefaultHandler(function (error, dom) {});
  let parser = new htmlparser.Parser(handler);
  let t = measureTime(function () {
    parser.parseComplete(rawHtml);
  });
  let time = t[0] + t[1] / 1000000000;
if (time > 1) {
	console.log("this_is_vulnerable")
} else {
	console.log("this_is_OK")
}
// });
