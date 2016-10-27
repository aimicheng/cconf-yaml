var cconf = require('../index');
var assert = require('assert');

it('should load yaml file ok', function() {
    cconf.use('test3');
    cconf.file('./tests/lib/global.yaml');
    cconf.file('./tests/lib/env.yaml');
    assert(cconf.get('a') == 'foo1');
    assert(cconf.get('c').shape === 'round');
});