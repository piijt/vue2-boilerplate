const appConfig = require('./src/app.config')



module.exports = {
    chainWebpack(config) {
        config.set('name', appConfig.title)
    }
}