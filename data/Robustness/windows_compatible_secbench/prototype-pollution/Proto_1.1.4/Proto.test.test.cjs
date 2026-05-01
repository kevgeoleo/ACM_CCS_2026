// //https://security.snyk.io/vuln/SNYK-JS-PROTO-1316301
// test("prototype pollution in Proto", () => {
  const proto = require("Proto");
  let payload = '{"__proto__":{"polluted":"yes"}}';

console.log({}.polluted);

  proto.merge({}, JSON.parse(payload));

console.log({}.polluted);
// });
