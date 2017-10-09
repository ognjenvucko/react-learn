var HTMLWebpackPlugin = require("html-webpack-plugin");

var HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
  template: __dirname + "/src/index.html",
  filename: "index.html",
  inject: "body"
});

module.exports = {
  entry: __dirname + "/src/app.js",
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ]
  },
  output: {
    filename: "bundle.js",
    path: __dirname + "/dist"
  },
  plugins: [HTMLWebpackPluginConfig]
};
