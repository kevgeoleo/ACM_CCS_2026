// //https://www.whitesourcesoftware.com/vulnerability-database/CVE-2021-25913

// test("prototype pollution in set-or-get", () => {
  var SetOrGet = require("set-or-get");
  obj = {};

console.log({}.polluted);

  SetOrGet(obj, "__proto__", {}).polluted = "yes";
console.log({}.polluted);
// });
