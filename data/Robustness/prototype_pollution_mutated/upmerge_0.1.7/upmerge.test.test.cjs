// //https://snyk.io/vuln/SNYK-JS-UPMERGE-174133
// test("prototype pollution in upmerge", () => {
  let upmerge = require("upmerge"); // this version is vulnerable
  let payload = '{"__proto__":{ "polluted" : "yes" } }'; // this comes from network
  obj = {};

console.log({}.polluted);
  upmerge.merge({}, JSON.parse(payload));

console.log({}.polluted);
// });
