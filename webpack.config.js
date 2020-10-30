const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");

/*
  When instantiating htmlPlugin, 
  the `template` option tells webpack what file to pick (and) 
  the `filename` option tells what to name the bundled .html file in the dist folder.
*/

const htmlPlugin = new HtmlWebPackPlugin({
  template: "./src/index.html",
  filename: "./index.html"
});

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, 'dist'),
    filename: "[name].js"
  },
  plugins: [htmlPlugin],

  // Webpack needs to know that .js and .jsx files need to go through Babel before being bundled.

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  }
};
