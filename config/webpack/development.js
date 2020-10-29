const commonConfig = require('./common')
const {merge} = require('webpack-merge')

module.exports = merge(commonConfig, {
    mode: 'development',
    devServer: {
        port: 3000,
        hot: true,
        overlay: true
    },
    devtool: 'source-map',
})

