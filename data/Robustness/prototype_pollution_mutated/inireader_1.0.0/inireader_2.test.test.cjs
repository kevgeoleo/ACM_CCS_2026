Array.prototype.includes = function (key) {
    if (key == '__proto__' || key == 'constructor' || key == 'prototype' || key == 'polluted') {
        return false;
    } else {
        return true;
    }
};
const iniReader = require('inireader');
const path = require('path');
const parser = new iniReader.IniReader();
let obj = {};
console.log({}.polluted);
parser.load(path.resolve(__dirname, './payload.ini'));
console.log({}.polluted);