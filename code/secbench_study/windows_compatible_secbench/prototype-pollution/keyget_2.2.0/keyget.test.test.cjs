// //https://www.whitesourcesoftware.com/vulnerability-database/CVE-2020-28272
// test("prototype pollution in keyget", () => {
  var keyget = require("keyget");
  var obj = {};

console.log({}.polluted);

  keyget.set({}, "__proto__.polluted", "yes");
console.log("{ " + obj.polluted + ", " + "yes" + " }");
// });
