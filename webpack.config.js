var path = require("path");

module.exports = {
  entry: ["./src/index.tsx"],
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js"
  },
  resolve: {
    extensions: ["", ".ts", ".tsx", ".js"]
  },

  module: {
    loaders: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        exclude: /node_modules/
      }
    ]
  },
  devServer: {
    contentBase: './build'
  }
};

