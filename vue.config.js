const fs = require('fs');

module.exports = {
    chainWebpack: config => {
        config.module.rules.delete('eslint');
    },
    devServer: {
    disableHostCheck: true,
    port: 3000,
    host: 'localhost',
    key: fs.readFileSync('./key.pem'),
    cert: fs.readFileSync('./cert.pem'),
    public: 'https://62.109.30.34:3000/',
    https: true,
    hotOnly: false
   }
}
