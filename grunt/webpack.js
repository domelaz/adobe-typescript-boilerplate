"use strict";

const path = require("path");
const webpack = require("webpack");

module.exports = {
  options: {
    entry: [
      path.join(__dirname, "..", "<%= build %>/<%= src %>", "<%= jsEntry %>")
    ],
    output: {
      path: path.join(__dirname, "..", "<%= build %>/<%= jsxBuild %>"),
      filename: "<%= jsxBundle %>",
    },
    plugins: [],
  },
  dev: {
    output: {
      pathinfo: true,
    },
  },
  prod: {
    output: {
      pathinfo: false,
    },
    plugins: [
      new webpack.DefinePlugin({
        "process.env": {
          "NODE_ENV": JSON.stringify("production")
        }
      }),
      new webpack.optimize.DedupePlugin(),
      new webpack.optimize.OccurenceOrderPlugin(),
      new webpack.optimize.UglifyJsPlugin({
        test: /\.jsx?$/,
        "screw-ie8": true,
        compress: true,
        sourceMap: false,
      })
    ]
  },
};
