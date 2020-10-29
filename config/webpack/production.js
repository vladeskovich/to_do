const commonConfig = require('./common');
const {merge} = require('webpack-merge');

module.exports = merge(commonConfig, {
    mode: 'production',
    optimization: {
        splitChunks: {
            chunks: 'all',
        },
    },
});
