const fs = require('fs');

module.exports = {
    chainWebpack: config => {
        config.module.rules.delete('eslint');
    },
    devServer: {
    disableHostCheck: true,
    port: 8080,
    host: 'localhost',
    key: fs.readFileSync('./key.pem'),
    cert: fs.readFileSync('./cert.pem'),
    public: 'https://62.109.30.34:8080/',
    https: true,
    hotOnly: false
   }
}
