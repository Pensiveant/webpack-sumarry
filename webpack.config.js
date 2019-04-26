var path = require("path");


var config = {
    entry: {
        app: "./src/index.js"
    },
    output: {
        path: path.join(__dirname, "dist/"),
        filename: "[name].bundle.js"
    }
}







module.exports = config;