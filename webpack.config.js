const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/main.ts",
  module: {
    rules: [
      {
        use: "file-loader",
        include: path.join(__dirname, "assets"),
        exclude: /\.json$/
      },
      {
        test: /\.ts$/,
        use: "ts-loader",
        include: path.join(__dirname, "src")
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, "static"),
    compress: true,
    port: 9000
  }
};
