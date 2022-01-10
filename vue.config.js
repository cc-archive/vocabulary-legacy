const path = require("path");

module.exports = {
    configureWebpack: (config) => {
        // eslint-disable-next-line no-param-reassign
        config.resolve.alias["@"] = path.resolve(__dirname,  "src");
        // return config;
    }
}