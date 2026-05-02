Object.prototype.hasOwnProperty = () => true;
console.log({}.polluted);
const keyd = require('keyd');
keyd({}).set('__proto__.polluted', 'yes');
console.log({}.polluted);