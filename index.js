var postcss = require('postcss');
module.exports = postcss.plugin('postcss-current-selector', function (opts) {
    if (!opts) opts = {};
    opts.symbol = opts.symbol || '%@';
    return function (css) {
        function processNode(parent) {
            parent.walk(function (node) {
                if (node.type === 'atrule') {
                    processNode(node);
                } else if (node.type === 'rule') {
                    processNode(node);
                } else if (node.type === 'decl') {
                    if (node.value.indexOf(opts.symbol) !== -1) {
                        node.value =
                            node.value.replace(opts.symbol, parent.selector);
                    }
                }
            });
        }
        processNode(css);
    };
});
