// test("prototype pollution in merge-objects", () => {
  const merge = require("deep-extend");
  const malicious_payload = '{"__proto__":{"polluted":"yes"}}';

  obj = {};

console.log({}.polluted);

  merge({}, JSON.parse(malicious_payload));
console.log({}.polluted);
// });
