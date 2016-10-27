var cconf = require('cconf');
var yaml = require('js-yaml');

cconf.register_format('yaml', {
    parse: function(content) {
        return yaml.safeLoad(content);
    }
});
module.exports = cconf;