const path = require("path");

module.exports = {
  entry: "./src/app.js",
  output: {
    path: path.join(__dirname, "public"),
    filename: "dist/bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  devServer: {
    contentBase: path.join(__dirname, "public"),
    host: "localhost",
    port: 3000,
    open: true,
  },
  devtool: "inline-source-map",
};
