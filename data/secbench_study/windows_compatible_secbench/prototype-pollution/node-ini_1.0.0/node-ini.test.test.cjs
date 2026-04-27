// //https://security.snyk.io/vuln/SNYK-JS-NODEINI-1054844
// test("prototype pollution in node-ini", () => {
  const ini = require("node-ini");

console.log({}.polluted);

  ini.parse("./payload.ini", function (err, data) {
console.log({}.polluted);
  });
// });
