// //https://snyk.io/vuln/SNYK-JS-DEEPS-598667
// test("prototype pollution in deeps", () => {
console.log({}.polluted);

  const deeps = require("deeps");
  deeps.set({}, "__proto__.polluted", "yes");

console.log({}.polluted);
// });
